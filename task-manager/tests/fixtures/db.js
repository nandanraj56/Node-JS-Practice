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
const userID2 = new mongodb.ObjectID()
const userTwo = {
    _id: userID2,
    name: "Nandan Raj",
    password: "qwerty567",
    email: "sdshj1@gmail.com",
    tokens: [{
        token: jwt.sign({ _id: userID2 }, process.env.JWT_SECRET)
    }]
}


const setupDB = async()=>{
    await Users.deleteMany()
    const user = new Users(userOne)
    await new Users.findById(userTwo).save()
    await user.save()
}

module.exports = {
    userID,
    userOne,
    setupDB
}