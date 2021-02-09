const Task = require("../models/task")
const express = require("express")
const auth = require("../middleware/auth")
const router = express.Router()

//creating a task
router.post("/tasks",auth,async (req, res) => {
    
    try{
        const task = new Task({
            ...req.body,
            owner:req.user._id

        })
        await task.save()
        res.status(201).send(task)
    }
    catch(e){
        res.status(400).send(e)
    }
})
//getting all tasks
router.get("/tasks",async (req, res) => {
    try{
        const task = await Task.find({})
        res.send(task)
    }catch(e){
        res.status(500).send(e)
    }
})
//get a task
router.get("/tasks/:id",async (req, res) => {
    try{
        const _id = req.params.id//new ObjectID(req.params.id)
        const task = await Task.findById(_id)
        if (!task)
            return res.status(404).send()
        await task.populate("owner").execPopulate()
        console.log(task.owner)
        res.send(task)
    }catch(e){
        console.log(e)
        res.status(500).send()
    }
    
})
//update a task
router.patch("/tasks/:id",async(req,res)=>{
    const allowedUpdates = ["completed","description"]
    const updates = Object.keys(req.body)

    const isValidUpdate = updates.every((element)=>{
        return allowedUpdates.includes(element)
    })
    
    if (!isValidUpdate)
        return res.status(400).send({ "error": "Invalid Request" })
    try {
        const task = await Task.findById(req.params.id)
        //const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        if (!task) {
            return res.status(404).send({ error: "not found" })
        }
        updates.forEach((update)=>{
            task[update] = req.body[update]
        })
        await task.save()
        res.send(task)
    }catch(e){
        res.status(500).send(e)
    }
    
    

})
//delete a task
router.delete("/tasks/:id", async(req,res)=>{
    try{
        const task = await Task.findByIdAndDelete(req.params.id)
        if(!task) 
            return res.status(404).send({error:"not found"})
        res.send(task)
    }catch(e){
        res.status(500).send(e)
    }

})

module.exports = router