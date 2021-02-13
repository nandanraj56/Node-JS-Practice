const jwt = require("jsonwebtoken")
const User = require("../models/user")
const logger = require("../../logger/log")


const verifyToken = async(req,res,next)=>{
    try{
        const token = req.header("Authorization").replace("Bearer ","")
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        
        const user = await User.findOne({ _id : decoded._id, "tokens.token" : token})
        if(!user)
            throw new Error("header "+req.header("Authorization")+"decoded id "+decoded._id+" token: "+token+" decoded data: ")

        req.token = token
        req.user = user
        next()
     
    }catch(e){
        logger(e)
        res.status(401).send({error:"Please Authenticate"})
    }
    
}

module.exports = verifyToken