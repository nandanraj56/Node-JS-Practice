const Task = require("../models/task")
const express = require("express")
const router = express.Router()

router.post("/tasks",async (req, res) => {
    
    try{
        const task = new Task(req.body)
        await task.save()
        res.status(201).send(task)
    }
    catch(e){
        res.status(400).send(e)
    }
})

router.get("/tasks",async (req, res) => {
    try{
        const task = await Task.find({})
        res.send(task)
    }catch(e){
        res.status(500).send(e)
    }
})

router.get("/tasks/:id",async (req, res) => {
    try{
        const _id = req.params.id//new ObjectID(req.params.id)
        const task = await Task.findById(_id)
        if (!task)
            return res.status(404).send()
        res.send(task)
    }catch(e){
        res.status(500).send()
    }
    
})

router.patch("/tasks/:id",async(req,res)=>{
    const allowedUpdates = ["completed","description"]
    const updates = Object.keys(req.body)

    const isValidUpdate = updates.every((element)=>{
        return allowedUpdates.includes(element)
    })
    
    if (!isValidUpdate)
        return res.status(400).send({ "error": "Invalid Request" })
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        if (!task) {
            return res.status(404).send({ error: "not found" })
        }
        res.send(task)
    }catch(e){
        res.status(500).send(e)
    }
    
    

})
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