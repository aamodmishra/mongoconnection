const { MongoClient } = require("mongodb");

// 1. Connection URL
const url = "mongodb://localhost:27017";  
const client = new MongoClient(url);

async function run() {
  try {
    // Connect to MongoDB server
    await client.connect();
    console.log("✅ Connected to MongoDB");

    //  Select (or create) a database
    const db = client.db("mydb");
    

    const employee =await db.collection("employee").deleteOne({name:"sita"});
    
    console.log("employees:");
    console.log (employee)

  } catch (err) {
    console.error("❌ Error:", err);
  } finally {
    // 6. Close the connection
    await client.close();
    console.log("🔒 Connection closed");
  }
}

run();
