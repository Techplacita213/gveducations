const { object } = require('joi')
const mongoose = require('mongoose')

const courseSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    Instructor:{
        type:String,
        required:true,
    },
    IEmail:{
        type:String,
    },
    overview:{
        type:String,
        required:true
    },
    Features:{
        type:Object,
       // required:true
    },
    InstructorImage:{
        type:String,
       // required:true
    },
    reviews:{
        type:Object,
       // required:true
    },
    cateo:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    Topics:{
        type:Array,
        required:true
    },
    users:{
        type:Array
    },
    productImage:{
        type:String,
        required:true
    },
    roomId:{
        type:mongoose.SchemaTypes.ObjectId
    },
    date:{
        type:Date,
        required:true
    },
    instructorID:{
        type:mongoose.SchemaTypes.ObjectId,
        required:true
    }

})

module.exports=mongoose.model('course',courseSchema)