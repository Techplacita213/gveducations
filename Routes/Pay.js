const express = require('express')
const Route = express.Router()
const Razorpay = require('razorpay')
const shortid = require('shortid')
const crypto = require('crypto')
const dotenv = require('dotenv')
const User =require('../models/User')
const Course =require('../models/course')
const axios = require('axios')
dotenv.config()

const razorpay = new Razorpay({
    key_id:process.env.ID,
    key_secret:process.env.SKEY
})

Route.post('/orderId',async (req,res)=>{
    try{
        console.log(req.body.amount)
        const response = await razorpay.orders.create({
            amount : req.body.amount,
            currency:"INR",
            receipt : shortid.generate(),
            payment_capture:1
        })
        res.send(response.id)
    }
    catch(err){
        console.log(err)
    }
    
})

function AddMemberToRoom(email,roomId){
    axios.post('/addMembersExternal',{email,roomId}).then((res)=>{
        console.log(res.data)
    }).catch(err=>console.log(err))
}

Route.post('/verify',async (req,res)=>{
    const SECRET = 'sec123'
    const cry =  crypto.createHmac('sha256',SECRET)
    cry.update(JSON.stringify(req.body))
    const digest = cry.digest('hex')
    console.log("REQUEST",req.body.payload.payment)
    console.log("REQUEST",req.body.payload.payment.entity.email)
    if(digest == req.headers['x-razorpay-signature']){
        const cours=req.body.payload.payment.name
        const usr= await User.findOne({email:req.body.payload.payment.entity.email})
        const course=await Course.findOne({name:cours})
        usr.courses.push(cours)
        AddMemberToRoom(usr.email,course.roomId)
        course.users.push(usr.email)
        usr.save()
        course.save()
        res.json({
            state:'ok'
        })
    }
    else{
        res.status(400)
    }
   
})
module.exports = Route