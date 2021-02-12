const mongoose = require('mongoose')

const LogSchema = new mongoose.Schema({
    stack_trace:{
        type:'string'
    }
},{
    timestamps:true
})
const Log = mongoose.model('Log',LogSchema)

const logger = async (stack_trace)=>{
    const log = new Log({
        stack_trace
    })
    await log.save()

}

module.exports = logger