const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  title: { type: String, required: true, index: { unique: true } },
  author: { type: [String], required: true, index: { unique: true } },
  link: { type: String, required: true, index: { unique: true } },
  description: { type: String, required: true, index: { unique: true } },
  image: { type: String, required: true, index: { unique: true } },
  googleId: { type: String, required: true }
});


const Book = mongoose.model('Book', userSchema);

module.exports = Book;
