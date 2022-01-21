const express = require('express')
const Route = express.Router()
const nodemailer = require('nodemailer')

const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        type: "OAuth2",
        user: "noreply-recruitment@iiitu.ac.in", //your gmail account you used to set the project up in google cloud console"
        clientId: process.env.GCID,
        clientSecret: process.env.GCSECRET,
        refreshToken: process.env.GREFRESH_TOKEN,
        accessToken:process.env.GACCESS_TOKEN //access token variable 
    }
});

Route.get('/verify',(req,res)=>{
    
})

Route.get('/sendEmail',async (req,res)=>{
    let info = await transporter.sendMail({
        from: 'krystina.frami@ethereal.email', // sender address
        to: "baidrishabh443@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      }).then(res=>{
          console.log(res)
      }).catch(err=>{
          console.log(err)
      })
      res.send("run")
})

module.exports = Route