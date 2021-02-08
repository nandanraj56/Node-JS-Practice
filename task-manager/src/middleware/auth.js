const jwt = require("jsonwebtoken")
const User = require("../models/user")


const verifyToken = async(req,res,next)=>{
    try{
        const token = req.header("Authorization").replace("Bearer ","")
        const decoded = jwt.verify(token,"sdsd")
        
        const user = await User.findOne({ _id : decoded._id, "tokens.token" : token})
        console.log(user)
        if(!user)
            throw Error()
        req.user = user
        next()
     
    }catch(e){
        console.log(e)
        res.status(401).send({error:"Please Authenticate"})
    }
    
}

module.exports = verifyToken