import mongoose, { Schema } from "mongoose";

const employeeSchema = new mongoose.Schema({
    name : String,
    salary : Number,
    language : String,
    city : String,
    ismanager : Boolean
})

export default mongoose.model('Employee',employeeSchema);
