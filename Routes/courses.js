const express = require('express')
const Route = express.Router()
const Course = require('../models/course')
const {verifyToken} = require('../valid/ValidAuth')
const {validCourse}=require('../valid/courseValid')
const axios = require('axios')

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, 'uploads');
    },
    filename: function(req, file, cb) {
      cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
    }
  });
  
  const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };
  
  const upload = multer({
    storage: storage
    // limits: {
    //   fileSize: 1024 * 1024 * 6
    // },
    // fileFilter: fileFilter
  });

function createRoom(courseId){
  axios.post('/room/createRoomExternal',{courseId,members:[]}).then((res)=>{
    console.log(res)
  }).catch((err)=>console.log(err))
}

Route.get('/getCourses',async (req,res)=>{
    //console.log("running")
    // if(!req.body.name)
    //     return res.send("name is required")
    
    const result= await Course.find({})
    if(result.length===0)
        return res.status(400).send("No Courses")
    //console.log(result)
    res.send(result)
})

// Route.get('/cateo',verifyToken,(req,res)=>{

// })

Route.post('/postCourses',verifyToken,async (req,res)=>{
  try{
 
    console.log(req.body)
    const {error} = await validCourse(req.body)
    //console.log("run")
    if(error)
        return res.status(400).send({message:error.message})

    const course= new Course({...req.body,instructorID:req.user.id})
    //console.log(course)
    
        const result = await course.save()
        
        createRoom(course._id)
    }
    catch(error){
      console.log(error)
        res.status(400).send(error.message)
        return;
    }
    res.send({message:"created"})
})

Route.post('/deleteCourses',verifyToken,async (req,res)=>{
    if(!req.body.name)
        return res.send("name is required")

  const result = await Course.deleteOne({name:req.body.name})
    //console.log(result)
  if(result.deletedCount==0)
        return res.send("course does not exists.")
   res.send(true)
})

module.exports=Route