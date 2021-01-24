require("../db/mongoose")

const Task = require("../models/task")

Task.findByIdAndDelete("60072fc38d27823ae8b4ab61").then((data)=>{
    return Task.countDocuments({"completed":false})
}).then((tasks)=>{
    console.log(tasks)
}).catch((e)=>{
    console.log(e)
})