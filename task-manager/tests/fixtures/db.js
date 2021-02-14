const jwt = require('jsonwebtoken')
const mongodb = require('mongodb')
const Users = require('../../src/models/user')
const userID = new mongodb.ObjectID()
const userOne = {
    _id: userID,
    name: "Nandan Raj",
    password: "qwerty567",
    email: "sdshj@gmail.com",
    tokens: [{
        token: jwt.sign({ _id: userID }, process.env.JWT_SECRET)
    }]
}

const setupDB = async()=>{
    await Users.deleteMany()
    const user = new Users(userOne)
    await user.save()
}

module.exports = {
    userID,
    userOne,
    setupDB
}