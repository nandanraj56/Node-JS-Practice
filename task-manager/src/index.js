const express = require("express")
//const bcrypt = require("bcryptjs")
const userRouter = require("./routers/user")
const taskRouter = require("./routers/task")
require("./db/mongoose")
//const jwt = require("jsonwebtoken")
//const User = require("./models/user")
//const Task = require("./models/task")

const app = express()

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)



const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('Listening')
})

/*const main = async() => {
    //task-> user
    /*const task = await Task.findById("60223360b1c9fb2c58317797")
    await task.populate("owner").execPopulate()
    console.log(task.owner)*/
    //user-> tasks
    /*const user = await User.findById('602172562036403500229b1e')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks)

}
main()*/

