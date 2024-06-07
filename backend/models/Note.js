const mongoose = require('mongoose');
const { Schema } = mongoose;

const NotesSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title:{
        type: String,
        required:true
    },
    description:{
        type:String,
        required:true,
    },
    tag:{
        type:String,
        default:"General"
    },
    date:{
        type:Date,
        default:Date.now
    },
});

module.exports = mongoose.model('notes',NotesSchema);

/*
const NotesSchema = new mongoose.Schema({...}) creates a new schema for the notes collection.
The schema defines the structure of documents within the collection, specifying the fields and their types.

This line creates a model named 'notes' using the NotesSchema and exports it.
A model in Mongoose is a wrapper for the schema, providing an interface for interacting with the 
database (e.g., creating, reading, updating, and deleting documents).
*/