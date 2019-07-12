const router = require ('express').Router();
const db = require ('../models')

router.post('/api/books', function(req, res) {
  //console.log(req.body)
  var book=req.body
  // console.log("Book Information:")
  // console.log(book.volumeInfo.title);
  // console.log(book.volumeInfo.authors.toString())
  // console.log(book.selfLink);
  // console.log(book.volumeInfo.description);
  // console.log(book.volumeInfo.imageLinks.thumbnail);
  // console.log(book.id);
  var bookToSave={
    title: book.volumeInfo.title,
    author: book.volumeInfo.authors.toString(),
    link: book.selfLink,
    description: book.volumeInfo.description,
    image: book.volumeInfo.imageLinks.thumbnail,
    googleId: book.id
  }
  db.Book.create(bookToSave).then(function(response){
    console.log("Stored book: ");
    console.log(response)
    res.json(response)

  })
})

module.exports = router;
