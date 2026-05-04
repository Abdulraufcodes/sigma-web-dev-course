import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title : String,
    decs : String,
    isDone : Boolean
});

export const todo = mongoose.model('todo', todoSchema);