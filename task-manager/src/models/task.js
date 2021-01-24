const mongoose = require('mongoose')

const Task = mongoose.model('Task',{
    description:{
        type:String,
        required:true,
        trim:true
    },
    completed:{
        type:Boolean,
        default:false
    }

})

module.exports = Task

/*const t = new Task({
    description:"Clean tasks",
    
})

t.save().then((data)=>{
    console.log(data)
}).catch((e)=>{
    console.log(e)
})*/