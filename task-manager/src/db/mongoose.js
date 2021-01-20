const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://localhost:27017/task-manager-api',{useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology:true})
    .then((data)=>{
        console.log('Succesfully Connected')
    }).catch((e)=>{
        console.log(e)
    })

const User = mongoose.model('Users',{
    name:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is not valid')
            }
        }
    },
    age:{
        type:Number,
        default:0,
        validate(value){
            if(value<1)
                throw new Error('Age must be positive')
        }
    }
})

const x = new User({
    name:"Nandan",
    age:7,
    email:"nana@dfd.vAom "
});
x.save().then((data)=>{
    console.log(data)
}).catch((e)=>{
    console.log(e);
})

/*const Task = mongoose.model('Task',{
    description:{
        type:String,
        required:true
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
})*/