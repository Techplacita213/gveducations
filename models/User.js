const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    college:{
        type:String,
        required:true
    },
    isTeacher:{
        type:Boolean,
        required:true
    },
    isVerified:{
        type:Boolean,
        required:true
    },
    courses:{
        type:Array
    },
    isAdmin:{
        type:Boolean,
        required:true
    },
    upiId:{
        type:String
    }
})

module.exports = mongoose.model('user',userSchema)