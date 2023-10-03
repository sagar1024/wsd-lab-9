import React, { useState } from 'react';
import './App.css';
import BookList from './BookList';
import SearchBar from './SearchBar';
import books from './books';

function App() {
  const [bookList] = useState(books);

  const addReview = (bookId, review) => {
    console.log(`Adding review for book ID ${bookId}: ${review}`);
  };

  return (
    <div className="App">
      <h1>Online Bookstore</h1>
      <SearchBar />
      <BookList books={bookList} addReview={addReview} />
    </div>
  );
}

export default App;
