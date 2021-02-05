const express = require("express")
const bcrypt = require("bcryptjs")
const userRouter = require("./routers/user")
const taskRouter = require("./routers/task")
require("./db/mongoose")
const jwt = require("jsonwebtoken")

const app = express()

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('Listening')
})

/*const test = async()=>{
    const plainPass = "hello123@"
    const hashedPass = await bcrypt.hash(plainPass,8)
    console.log(hashedPass)

    console.log(await bcrypt.compare(plainPass,hashedPass))
}
test()*/

const test = async()=>{
    const token = await jwt.sign({_id:"abc123"},"mysecretstring",{expiresIn: "7 days"})
    console.log(token)
    const data = jwt.verify(token,"mysecretstring")
    console.log(data)

}
test()