const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://joviajo:joviajo@casestudy2.elrmjqm.mongodb.net/?retryWrites=true&w=majority");

//  .then((res)=>{
//     console.log("connected");
// });
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title: String,
    author:String,
    genre:String,
    image:String
});

var Bookdata = mongoose.model('bookdata',BookSchema);

module.exports = Bookdata;
