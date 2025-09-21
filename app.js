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

    //  Create a collection named "employee"
    await db.createCollection("employee");
    console.log("📂 Collection 'employee' created!");

    // 5. Insert employee data into collection
    const employeeData = [
      { name: "Aamod", role: "Software Engineer", salary: 50000 },
      { name: "Ramesh", role: "Tester", salary: 30000 },
      { name: "Sita", role: "Manager", salary: 70000 }
    ];

    const result = await db.collection("employee").insertMany(employeeData);
    console.log(`✅ ${result.insertedCount} employees inserted!`);

  } catch (err) {
    console.error("❌ Error:", err);
  } finally {
    // 6. Close the connection
    await client.close();
    console.log("🔒 Connection closed");
  }
}

run();
