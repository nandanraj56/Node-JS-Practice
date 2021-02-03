const validator = require('validator')
const mongoose = require('mongoose')
const bcrypt = require("bcryptjs")

const userSchema = new mongoose.Schema({
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
userSchema.pre("save",async function(next){
    const user = this
    if(user.isModified("password")){
        user.password = await bcrypt.hash(user.password,8)
    }
    next()
})
const User = mongoose.model('Users',userSchema)




module.exports = User;
