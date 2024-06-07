const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/inotebook?readPreference=primary&appname=mongoDB%20Compass&directConnection=true&ssl=false"
mongoose.set('strictQuery', true);

const connectToMongo  = () => {
    mongoose.connect(mongoURI, () => {
        mongoose.connect(mongoURI, () => {
            console.log("Connected to MongoDB successfully");
        })
    })
}
module.exports = connectToMongo;

