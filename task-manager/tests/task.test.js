const {  userOne,userID, setupDB} = require('./fixtures/db')
const request = require('supertest')
const Tasks = require('../src/models/task')
const app = require('../src/app')
beforeEach(setupDB)
test('Should create a task for user',async()=>{
    await request(app).post('/tasks')
        .set('Authorization',`Bearer ${userOne.tokens[0].token}`)
        .send({
            description:"text zzz"
        }).expect(201)

    const task = await Tasks.findOne({description:"text zzz"})
    expect(task).not.toBeNull()

    expect(task.completed).toEqual(false)
})