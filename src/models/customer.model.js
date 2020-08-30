let mongoose = require('mongoose');


const database = 'rest-api-workshop'
const user='rajat'
const password = '23154'

mongoose.connect("mongodb://localhost:27017/dducDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
} ).then(() => console.log("Success connect")).catch(err => console.log(err));

let CustomerSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('Customer', CustomerSchema)