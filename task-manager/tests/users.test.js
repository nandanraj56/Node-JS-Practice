const app = require("../src/app")
const request = require('supertest')

test('Test user creation',async()=>{
    await request(app).post('/users').send({
        name:"anjali",
        email:"anh@hgvhg.com",
        password:"dsasad"
    }).expect(201)
})