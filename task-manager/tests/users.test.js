const app = require("../src/app")
const request = require('supertest')
const Users = require('../src/models/user')
const jwt = require('jsonwebtoken')
const mongodb = require('mongodb')
const { send } = require("@sendgrid/mail")
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
beforeEach(async () => {
    await Users.deleteMany()
    const user = new Users(userOne)
    await user.save()
})

test('Should signup a user', async () => {
    const response = await request(app).post('/users').send({
        name: "anjali",
        email: "anh@hgvhg1.com",
        password: "dsasad"
    }).expect(201)

    //Advanced assertions
    //Expect correct user is returned
    expect(response.body.data.name).toBe("anjali")
    const user = await Users.findById({ _id: response.body.data._id })
    //User is not null
    expect(user).not.toBeNull()
    //console.log(response.body.data)
    //Matching object
    expect(response.body).toMatchObject({
        data: {
            name: "anjali",
            email: "anh@hgvhg1.com",
        },
        token:`${user.tokens[0].token}`

    })


})

test('should login a user', async () => {
    await request(app).post('/users/login').send({
        email: userOne.email,
        password: userOne.password

    }).expect(200)
})

test('should not login nonexistent user',async()=>{
    await request(app).post('/users/login').send({
        email:"hgfhg@hgh.fdf",
        password:"sdsnnjas"
    }).expect(400)
})

test('Should get profile for athenticated user', async () => {
    await request(app)
        .get('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)
})
test('Should delete account for athenticated user', async () => {
    const response = await request(app)
        .delete("/users/me")
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)
    //console.log(response.body)
    //Validate user is really deleted
    const user = await Users.findById({_id:response.body._id})
    expect(user).toBeNull()

    
})
test('Should not delete an unatheticated user', async () => {
    await request(app)
        .delete('/users/me')
        .send()
        .expect(401)
})

test('Validate new token is saved',async()=>{
    const user = await Users.findById({_id:userOne._id})
    expect(user.tokens[0].token).toBe(`${userOne.tokens[0].token}`)
})

//Test for Avatar upload
test('Should upload Avatar upload',async()=>{
    const response = await request(app).post('/users/me/avatar')
        .set('Authorization', `${userOne.tokens[0].token}`)
        .attach('avatar',"tests/fixtures/test.png")
        .expect(200)

        const user = await Users.findById({_id:userID})
        expect(user.avatar).toEqual(expect.any(Buffer))
})

//Test for User Updates
test('Should Update valid user fiels',async()=>{
    await request(app).patch('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            name:'xyz',
            email:'fhg@xyz.com'
        }).expect(200)
})

test('Should not update invalid user fields',async()=>{
    await request(app).patch('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            location:"jhgjhgh"
        }).expect(400)
})