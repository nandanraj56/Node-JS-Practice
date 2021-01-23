const validator = require('validator')
const mongoose = require('mongoose')

const User = mongoose.model('Users',{
    name:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is not valid')
            }
        }
    },
    password:{
        type:String,
        required:true,
        validate(value){
            if(value.toLowerCase().indexOf("password")>-1){
                throw Error('Password should not be password')
            }
        },
        minLength:6,
        trim:true
        
    },
    age:{
        type:Number,
        default:0,
        validate(value){
            if(value<0)
                throw new Error('Age must be positive')
        }
    }
})


module.exports = User;
