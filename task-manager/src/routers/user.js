const express = require("express")
const User = require("../models/user")
const router = express.Router()

router.post('/users', async (req, res) => {
    try {
        const user = new User(req.body)
        const data = await user.save()
        res.status(201).send(data)
    }
    catch (error) {
        res.status(400).send(error)
    }

})

router.get("/users", async (req, res) => {
    try {
        const users = await User.find({})
        if (users.length == 0)
            return res.status(404).send()
        res.send(users)
    } catch (error) {
        res.status(500).send()
    }
})

router.get("/users/:id",async (req, res) => {
    try {
        const _id = req.params.id
        const user = await User.findById(_id)
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)

    } catch (e) {
        res.status(500).send()
    }
})
router.patch("/users/:id",async(req,res)=>{
    const allowedUpdates = ['name','email','password','age']
    const updates = Object.keys(req.body)
    const isValid = updates.every((update)=>{
        return allowedUpdates.includes(update);
    })
    if(!isValid){
       return res.status(400).send()
    }
    try{
        const user = await User.findById(req.params.id)
        //const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true , runValidators:true})
        if(!user)
           return res.status(404).send()
        updates.forEach((update)=>{
            user[update]= req.body[update]
        })
        await user.save()
        res.send(user)
    }catch(e){
        res.status(500).send(e)
    }
});
router.delete("/users/:id",async(req,res)=>{
    try{
        const user = await User.findByIdAndDelete(req.params.id)
        if(!user) return res.status(404).send({"error":"not found"})

        res.send(user)
    }catch(e){
        res.status(500).send(e)
    }

})

router.post("/users/login",async(req,res)=>{
    try{
        const user = await User.findByCredentials(req.body.email,req.body.password)
        res.send(user)
    }catch(e){
        res.status(400).send(e)
    }
    
})


module.exports = router