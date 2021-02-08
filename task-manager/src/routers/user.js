const express = require("express")
const User = require("../models/user")
const auth = require("../middleware/auth")
const router = express.Router()

//Signup
router.post('/users', async (req, res) => {
    const user = new User(req.body)
    try {

        const data = await user.save()
        const token = await user.getAuthToken()
        res.status(201).send({ data, token })
    }
    catch (error) {
        res.status(400).send(error)
    }

})
//getting users
router.get("/users", async (req, res) => {
    try {
        const users = await User.find({})
        if (users.length == 0)
            return res.status(404).send()
        res.send(users)
    } catch (error) {
        res.status(500).send()
    }
})
//getting profile
router.get("/users/me", auth, async (req, res) => {
    res.send(req.user)
})
//gettig a user
router.get("/users/:id", async (req, res) => {
    try {
        const _id = req.params.id
        const user = await User.findById(_id)
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)

    } catch (e) {
        res.status(500).send()
    }
})
//updating a user
router.patch("/users/:id", async (req, res) => {
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const updates = Object.keys(req.body)
    const isValid = updates.every((update) => {
        return allowedUpdates.includes(update);
    })
    if (!isValid) {
        return res.status(400).send()
    }
    try {
        const user = await User.findById(req.params.id)
        //const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true , runValidators:true})
        if (!user)
            return res.status(404).send()
        updates.forEach((update) => {
            user[update] = req.body[update]
        })
        await user.save()
        res.send(user)
    } catch (e) {
        res.status(500).send(e)
    }
});

//deleting a user
router.delete("/users/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        if (!user) return res.status(404).send({ "error": "not found" })

        res.send(user)
    } catch (e) {
        res.status(500).send(e)
    }

})

//Login 

router.post("/users/login", async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.getAuthToken()
        res.send({ user, token })
    } catch (e) {
        res.status(400).send("Invalid Login")
    }

})

//logout
router.post("/users/logout", auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter(token => token.token !== req.token)
        await req.user.save()
        res.send()
    } catch (e) {
        res.status(500).send()
    }

})

//logoutall
router.post("/users/logoutAll",auth,async (req, res)=>{
    try{
        req.user.tokens = [];
        await req.user.save()
        res.send()
    }catch(e){
        res.status(500).send()
    }
})


module.exports = router