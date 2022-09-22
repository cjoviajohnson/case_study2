const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://joviajo:joviajo@casestudy2.elrmjqm.mongodb.net/?retryWrites=true&w=majority");

//  .then((res)=>{
//     console.log("connected");
// });
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    name: String,
    book:String,
    genre:String,
    image:String
});

var Authordata = mongoose.model('authordata',AuthorSchema);

module.exports = Authordata;
