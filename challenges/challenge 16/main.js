import express from 'express'
import mongoose from 'mongoose'
import generatorRoute from './routes/generator.js' 

const port = 3000;
const app = express();

//connectiong database
await mongoose.connect('mongodb://localhost:27017/company')
console.log("connected");

//making index.html visible to users
app.use(express.static('public'));
//this will generate employees from generator.js
app.use('/',generatorRoute);

app.listen(port, () => {
    console.log('server running')
})