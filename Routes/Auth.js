const { Router } = require('express')
const express = require('express')
const Route = express.Router()
const bcrypt=require('bcrypt')
const {ValidSign,loginValid, verifyToken, verifyRefresh} =require('../valid/ValidAuth')
const User = require('../models/User')
const jwt = require('jsonwebtoken')


Route.post('/login',async (req,res)=>{
    try{
    const {error}=loginValid(req.body)
    if(error)
        return res.status(400).send(error.details[0].message)
  
    const user= await User.findOne({email:req.body.email})
    if(!user)return res.status(400).send({message:"Email or password is wrong"})
    //console.log(user)
    const validpass = await bcrypt.compare(req.body.password,user.password)
    if(!validpass) return res.status(400).send({message:'Email or password is wrong'})
   
    const token =jwt.sign({_id:user._id},process.env.TOKEN_SECRET,{expiresIn:"1200s"})
    const rtoken =jwt.sign({_id:user._id},process.env.REFRESH_TOKEN_SECRET,{expiresIn:"7d"})
        //req.setHeader('Access-Control-Allow-Origin',`*`);
    console.log(token)

     res.cookie('token',token,{
         maxAge: 2629800000,
         httpOnly:true,
         sameSite:"none",
         secure:true
     })
     res.cookie('rtoken',rtoken,{
        maxAge: 2629800000,
        httpOnly:true,
        sameSite:"none",
        secure:true
    })
    res.status(200).send("Test")
}
catch(err){
    console.log(err)
}
})

Route.get('/refresh',verifyRefresh,(req,res)=>{
    const token =jwt.sign({_id:req.user.id},process.env.TOKEN_SECRET,{expiresIn:"43200s"})
    const rtoken =jwt.sign({_id:req.user.id},process.env.REFRESH_TOKEN_SECRET,{expiresIn:"7d"})
    res.cookie('token',token,{
        maxAge: 2629800000,
        httpOnly:true,
        sameSite:"none",
        secure:true
    })
    res.cookie('rtoken',rtoken,{
       maxAge: 2629800000,
       httpOnly:true,
       sameSite:"none",
       secure:true
   })
        //req.setHeader('Access-Control-Allow-Origin',`*`);
    res.status(200).send("Test")
    
})

Route.post('/signup',async (req,res)=>{
    try{
       // console.log("run")
        const {error}= await ValidSign(req.body)
        if(error){
            res.status(400).send(error.message)
            return;
        }
       
        if(req.body.teach&&!/^[\w.-]+@[\w.-]+$/.test(req.body.upiId))
            return res.status(400).send("Enter valid upi ID")
        const emailCheck= await User.findOne({email:req.body.email})
        if(emailCheck)return res.status(400).send("email already exists") 

        const salt =await bcrypt.genSalt(10)
        const hashpassword= await bcrypt.hash(req.body.password,salt)
    
        const user = new User({...req.body,password:hashpassword})
        
        try{   
            const saved=await user.save()
            res.send({saved:user._id})
        }
        catch(err){
            console.log
            res.status(400).send(err)
        }
    }
    catch(err){
        console.log(err)
    }
})

Route.get('/dashboard',verifyToken,async (req,res)=>{
    const id = req.user.id || ""
    const user= await User.findById({_id:id})
    if(!user)
        return res.status(400).send("User Not Found")
    //console.log(user)
    return res.json({...user,password:""})    
})

Route.get('/logout',(req,res)=>{
    res.clearCookie('token',{
        sameSite:"none",
        secure:true
    })
    res.clearCookie('rtoken',{
        sameSite:"none",
        secure:true
    })
    res.send('cookie foo cleared');
})

module.exports=Route