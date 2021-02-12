const express = require("express")
const userRouter = require("./routers/user")
const taskRouter = require("./routers/task")
require("./db/mongoose")

const app = express()
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

module.exports = app

/*const main = async() => {
    //task-> user
    const task = await Task.findById("60225ac9e93ec00edc16e333")
    await task.populate("owner").execPopulate()
    console.log(task.owner)
    //user-> tasks
    /*const user = await User.findById('602172562036403500229b1e')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks)

}
main()*/

