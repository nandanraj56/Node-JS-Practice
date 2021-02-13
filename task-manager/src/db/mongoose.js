const mongoose = require('mongoose')
const logger = require('../../logger/log')

mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology:true,useFindAndModify:false})
    .then((data)=>{
        console.log('Succesfully Connected')
    }).catch((e)=>{
        logger(e)
        console.log(e)
    })



