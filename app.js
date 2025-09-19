// creating a collection name employee 

var {MongoClient} = require ('mongodb');
var url = "mongodb://localhost:27017/";
 // now connect mongodb server using mongoclient 
 const client =new MongoClient(url);

async function run(){
    try{
      await client.connect();
      const db =client.db ("mydb");

      await db.createCollection('employee');
      console.log("collection created");

      
    }catch (err){
        console.error("error",err)
    }finally {
        await client.close();
    }
}

run();
