const express = require("express")
const User = require("./models/user")
const app = express()


app.use(express.json())

const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log('Listening')
})

app.post('/users',(req,res)=>{
    
    const user = new User(req.body)
    user.save().then((data)=>{
        res.send(data)
    }).catch((error)=>{
        res.status(400).send(error)
    })

    //res.send("Hello")
})