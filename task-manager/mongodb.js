//Crud Create  read update delete

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://localhost:27017'
const databaseName = 'task-manager';

MongoClient.connect(connectionURL,{useNewUrlParser:true,useUnifiedTopology: true},(error,client)=>{
    if(error){
        return console.log(error);
    }
    const db = client.db(databaseName);
    //To insert one
    /*db.collection('users').insertOne({
        name:'Nandan Thakur',
        age:27
    },(error,result)=>{
        if(error){
            return console.log('Error occured while inserting to db')
        }
        console.log(result.ops);
    });
    console.log('Connected Succesfully');*/

    //To insert many
    /*const collection = db.collection('users');
    collection.insertMany([
        {
            name:"Anjali Shreya",
            age:23
        },
        {
            name:"Mukesh",
            age:23
        }
    ],(error,result)=>{
        if(error){
            return console.log('Insert error')
        }
        console.log(result.ops);
    });*/

    //Excercise
    db.collection('task').insertMany([
        {
            description:"Test 1",
            completed:true
        },
        {
            description:"Test 2",
            completed:true
        },
        {
            description:"Test 3",
            completed:false
        },
    ],(error,result)=>{
        if(error){
            return console.log("Insert error")
        }
        console.log(result.ops);

    });


});