const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/task-manager-api',{useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology:true})
    .then((data)=>{
        console.log('Succesfully Connected')
    }).catch((e)=>{
        console.log(e)
    })

/*const User = mongoose.model('Users',{
    name:{
        type:String
    },
    age:{
        type:Number
    }
})

const x = new User({
    name:"Nandan",
    age:"wdad"
});
x.save().then((data)=>{
    console.log(data)
}).catch((e)=>{
    console.log(e._message);
})*/

const Task = mongoose.model('Task',{
    description:{
        type:String
    },
    completed:{
        type:Boolean
    }

})

const t = new Task({
    description:"Clean room",
    completed:false
})

t.save().then((data)=>{
    console.log(data)
}).catch((e)=>{
    console.log(e)
})