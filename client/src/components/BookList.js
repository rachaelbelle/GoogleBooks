// booksList.js
import React from 'react';

// Separate the UI specific transforming logic to utils folder
import { bookAuthors } from '../utils';


import { Link } from 'react-router-dom';

const Book = ({ book }) => {
  return (
    <li>
      <div>
        <img
          alt={`${book.volumeInfo.title} book`}
          src={`http://books.google.com/books/content?id=${
            book.id
          }&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
        />
        <div>
          <h3>{book.volumeInfo.title}</h3>
          <p>{bookAuthors(book.volumeInfo.authors)}</p>
          <p>{book.volumeInfo.publishedDate}</p>
          <Link to={`/book/${book.id}`}>Show details </Link>
          <Link to={`/saved/${book.id}`}> Save Book</Link>
        </div>
      </div>
      <hr />
    </li>
  );
};

const BooksList = ({ books }) => {
  return (
    <ul>
      {books.items.map((book, index) => {
        return <Book book={book} key={index} />;
      })}
    </ul>
  );
};


export default BooksList;
