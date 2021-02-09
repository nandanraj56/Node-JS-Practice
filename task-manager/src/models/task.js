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
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
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
