//Crud Create  read update delete

const mongodb = require('mongodb');
const ObjectID = mongodb.ObjectID;
const MongoClient = mongodb.MongoClient;


const connectionURL = 'mongodb://localhost:27017'
const databaseName = 'task-manager';

/*const id = new ObjectID();
console.log(id.getTimestamp());*/

MongoClient.connect(connectionURL,{useNewUrlParser:true,useUnifiedTopology: true},(error,client)=>{
    if(error){
        return console.log(error);
    }
    const db = client.db(databaseName);
    //To query one data
   /* db.collection('users').findOne({name:"Mukesh"},(error,data)=>{
        if(error)
            return console.log('Error')
        
        console.log(data);
    });
    */
   
    //Query by id
    /*db.collection('users').findOne({_id:new ObjectID('6001ecbb3539c325502de2dd')},(error,data)=>{
        if(error)
            return console.log('Error')
        
        console.log(data);
    });*/

    //Find multiple
    //it returns mongodb.Cursor, we can conevrt to array or take one by one, similar to resultset
   /* db.collection('users').find({age:27}).toArray((error,data)=>{
        if(error)
            return console.log('Error')
        
        console.log(data);
    })*/

    //Find and count
    /*db.collection('users').find({age:27}).count((error,data)=>{
        if(error)
            return console.log('Error')
        
        console.log(data);
    })*/

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
    /*db.collection('task').insertMany([
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

    });*/

    //Excercize
   /* db.collection('task').findOne({"_id":new ObjectID('6001eead1031cf03e832e331')},(error,result)=>{
        if(error)
            return console.log('Error has occured');

        console.log(result)
    })
    db.collection('task').find({'completed':false}).toArray((error,result)=>{
        if(error)
            return console.log('Error has occured');

        console.log(result)
    })*/

    //Update one document

   /* db.collection('users').updateOne({"_id": new ObjectID('6001ecbb3539c325502de2dd')},{
        $set:{
            name:"muksku"
        }

    }).then((data)=>{
        console.log(data.result)
    }).catch((error)=>{
        console.log(error)
    });*/

    //Update many document

   /* db.collection('users').updateMany({"age":27},{
        $inc:{
            age:1
        }
    }).then((data)=>{
        console.log(data)
    }).catch((error)=>{
        console.log(error);
    });*/

    //Excercise

    /*db.collection('task').updateMany({"completed":false},{
        $set:{
            completed:true
        }
    }).then((data)=>{
        console.log(data.result)
    }).catch((error)=>{
        console.log(error)
    })*/

    //Delete many doument

    /*db.collection('users').deleteMany({
        "age": 23
    }).then((data)=>{
        console.log(data.result)
    }).catch((error)=>{
        console.log(error)
    })*/
    
    //Detete one
    db.collection('task').deleteOne({
        "description":"Test 1"
    }).then((data)=>{
        console.log(data.result)
    }).catch((error)=>{
        console.log(error)
    })

});