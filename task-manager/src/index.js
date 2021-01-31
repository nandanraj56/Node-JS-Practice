const express = require("express")
require("./db/mongoose")
const User = require("./models/user")
const Task = require("./models/task")
const app = express()


const mongodb = require('mongodb');
const ObjectID = mongodb.ObjectID;

app.use(express.json())

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('Listening')
})

app.post('/users', async (req, res) => {
    try {
        const user = new User(req.body)
        const data = await user.save()
        res.status(201).send(data)
    }
    catch (error) {
        res.status(400).send(error)
    }

})

app.get("/users", async (req, res) => {
    try {
        const users = await User.find({})
        if (users.length == 0)
            return res.status(404).send()
        res.send(users)
    } catch (error) {
        res.status(500).send()
    }
})

app.get("/users/:id",async (req, res) => {
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

app.post("/tasks",async (req, res) => {
    
    try{
        const task = new Task(req.body)
        await task.save()
        res.status(201).send(task)
    }
    catch(e){
        res.status(400).send(e)
    }
})

app.get("/tasks",async (req, res) => {
    try{
        const task = await Task.find({})
        res.send(task)
    }catch(e){
        res.status(500).send(e)
    }
})

app.get("/tasks/:id",async (req, res) => {
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