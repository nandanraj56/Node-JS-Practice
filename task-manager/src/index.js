const express = require("express")
require("./db/mongoose")
const User = require("./models/user")
const Task= require("./models/task")
const app = express()


const mongodb = require('mongodb');
const ObjectID = mongodb.ObjectID;

app.use(express.json())

const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log('Listening')
})

app.post('/users',(req,res)=>{
    
    const user = new User(req.body)
    user.save().then((data)=>{
        res.status(201).send(data)
    }).catch((error)=>{
        res.status(400).send(error)
    })

    //res.send("Hello")
})

app.get("/users",(req,res)=>{
    User.find({}).then((users)=>{
       /* if(users.length == 0)
            return res.status(404).send()*/
        res.send(users)
    }).catch((e)=>{
        res.status(500).send()
    })
})

app.get("/users/:id",(req,res)=>{
    const _id = req.params.id
    User.findById(_id).then((user)=>{
        if(!user)
            return res.status(404).send()
        res.send(user)
    }).catch((e)=>{
        res.status(500).send()
    })
})

app.post("/tasks",(req,res)=>{
    const task = new Task(req.body)

    task.save().then((data)=>{
        res.status(201).send(data)
    }).catch((e)=>{
        res.status(400).send(e)
    })
})

app.get("/tasks",(req,res)=>{
    Task.find({}).then((data)=>{
        res.send(data)
    }).catch((e)=>{
        res.status(500).send(e)
    })
})

app.get("/tasks/:id",(req,res)=>{
    console.log(req.params.id)
    const _id = req.params.id//new ObjectID(req.params.id)
    Task.findById(_id).then((data)=>{
        if(!data)
            return res.status(404).send()
        res.send(data)
    }).catch((e)=>{
        res.status(500).send()
    })
})