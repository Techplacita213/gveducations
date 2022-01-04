const express = require('express')
const Route = express.Router()
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'baidrishabh443@gmail.com'
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