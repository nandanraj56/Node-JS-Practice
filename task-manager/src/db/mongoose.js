const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://localhost:27017/task-manager-api',{useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology:true,useFindAndModify:false})
    .then((data)=>{
        console.log('Succesfully Connected')
    }).catch((e)=>{
        console.log(e)
    })

