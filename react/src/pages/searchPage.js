import React, { useState } from 'react';
import axios from 'axios';

import BookSearchForm from '../components/BookSearchForm';
import Loader from '../components/Loader';
import BooksList from '../components/BookList';

import api from '../api/api';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState({ items: [] });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  let API_URL = `https://www.googleapis.com/books/v1/volumes`;

  const fetchBooks = async () => {
    setLoading(true);
    setError(false);
    console.log("before the try")
    try {
      const result = await axios.get(`${API_URL}?q=${searchTerm}`);
      setBooks(result.data);
      console.log("Books are ")
      console.log(result.data.items[0])
      api.saveBook(result.data.items[0]);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  const onInputChange = e => {
    setSearchTerm(e.target.value);
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    console.log("I am in submit handler")
    fetchBooks();
  };

  return (
    <>
      <BookSearchForm
        onSubmitHandler={onSubmitHandler}
        onInputChange={onInputChange}
        searchTerm={searchTerm}
        error={error}
      />
      <Loader searchTerm={searchTerm} loading={loading} />
      <BooksList books={books} />
    </>
  );
};

export default SearchPage;
