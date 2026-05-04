//for explanation visit - https://chatgpt.com/share/694cd648-1d3c-8002-9f68-1dab3cf4d06c


const express = require('express') //express- for making server
const dotenv = require('dotenv') //loads env variables (not used yet)
const { MongoClient } = require('mongodb'); //used to connect database
const bodyParser = require('body-parser');   //used to conver raw JSON
const cors = require ('cors')  //to allow frontend and backend communication

dotenv.config()

// Connection URL
const url = 'mongodb://localhost:27017';  //port for mongodb
const client = new MongoClient(url);  //conn ection manager for mongodb

// Database Name
const dbName = 'passOp'; 
const app = express() //creating express app
const port = 3000  //port on which server runs
app.use(bodyParser.json())  //middleware to parson incoming JSON
app.use(cors()) //allows react to backend

//function to start server
async function startServer() {
  await client.connect();  //connects to mongodb once
  console.log("Connected to MongoDB");

  app.listen(port, () => {   //starts express server(runs after DB is connected to avoid crash)
    console.log(`Server running on port ${port}`);
  });
}

//Get all the passwords
app.get('/', async(req, res) => {
    const db = client.db(dbName);  //accesses database passOp,creates it if missing
    const collection = db.collection('passwords');  //accesses collection named passwords,creates it if missing
    const findResult = await collection.find({}).toArray(); //gets all the saved passwords through .find and converts to array
    res.json(findResult) //sends a password array to frontend
})

//Save a password
app.post('/', async(req, res) => {
    const password = req.body  //req.body contains password in JSON format
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.insertOne(password)
    res.send({success: true})
})

//Delete a password by id
app.delete('/', async(req, res) => {
    const password = req.body  //req.body contains password in JSON format
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.deleteOne(password)
    res.send({success: true})
})

startServer();
