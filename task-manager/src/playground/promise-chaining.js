require("../db/mongoose")

const User = require("../models/user")

User.findByIdAndUpdate("600d6043f5c7ab1f986b4377",{age:1}).then((result)=>{
    console.log(result)
    return User.countDocuments({age:1})
}).then((count)=>{
    console.log(count)
})