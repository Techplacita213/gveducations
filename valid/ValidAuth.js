const Joi=require('joi')
const jwt = require('jsonwebtoken')

async function ValidSign(obj){
   console.log(obj)
    const schema=Joi.object({
        email:Joi.string().email().required(),
        name:Joi.string().min(2).required(),
        password:Joi.string().min(5).required(),
        college:Joi.string().required(),
        isVerified:Joi.boolean().required(),
        isAdmin:Joi.boolean().required(),
        isTeacher:Joi.boolean().required(),
        phone:Joi.required()
    })
   const result=await schema.validate(obj)
   console.log("valid",result)
   return result;
}

async function loginValid(obj){
    const schema=Joi.object({
        email:Joi.string().email().required(),
        password:Joi.string().min(5).required()
    })
   const result=await schema.validate(obj)
   return result;
}

const verifyToken = async (req, res, next) => {
  //console.log(req.cookies)
    const token = await req.cookies.token || '';
     console.log(token)
      var ret;
      if (token==='') {
        return res.status(401).send('You need to Login')
      }
      let decrypt;
      try{
         decrypt = await jwt.verify(token, process.env.TOKEN_SECRET);
         console.log(decrypt)
      }
      catch(err){
        console.log(err)
        return res.status(401).send("you need to login")
      }
      req.user = {
        id: decrypt._id
        //firstname: decrypt.firstname,
      };
      next(); 
  }
  const verifyTokenExternal = async (req, res, next) => {
    //console.log(req.cookies)
      const token = await req.params.token || '';
       //console.log(token)
        var ret;
        if (token==='') {
          return res.status(401).send('You need to Login')
        }
        let decrypt;
        try{
           decrypt = await jwt.verify(token, process.env.TOKEN_SECRET);
           console.log(decrypt)
        }
        catch(err){
          console.log(err)
          return res.status(401).send({message:"you need to login",isAllowed:false})
        }
        req.user = {
          id: decrypt._id
          //firstname: decrypt.firstname,
        };
        next();
       
       
      
    }
  const verifyRefresh = async (req, res, next) => {
  
      const rtoken = await req.cookies.rtoken || '';
      //const token = await req.cookies.token || '';
      console.log(rtoken+"ri")
        if (rtoken==='') {
          return res.status(401).send('You need to Login')
        }
        //const decrypt = await jwt.verify(token, process.env.TOKEN_SECRET);
        let rsec
        try{
          rsec= await jwt.verify(rtoken, process.env.REFRESH_TOKEN_SECRET)
          
        }
        catch(err){
          return res.status(401).send("you need to login")
        }
        
        req.user = {
          id: rsec._id
          //firstname: decrypt.firstname,
        };
        next();
      
    }
module.exports.verifyRefresh = verifyRefresh
module.exports.verifyToken=verifyToken
module.exports.ValidSign=ValidSign
module.exports.loginValid=loginValid