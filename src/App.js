import React, { useState } from 'react';
import './App.css';
import BookList from './BookList';
import SearchBar from './SearchBar';
import books from './books'; // Import the local JavaScript file with books

function App() {
  const [bookList] = useState(books);
  const addReview = (bookId, review) => {
    console.log(`Adding review for book ID ${bookId}: ${review}`);
  };

  const [filteredBooks, setFilteredBooks] = useState(books);

  const handleSearch = (searchResults) => {
    setFilteredBooks(searchResults);
  };

  return (
    <div className="App">
      <h1>Online BookStore</h1>
      <SearchBar books={books} onSearch={handleSearch} />

      {/* <BookList books={bookList} addReview={addReview} /> */}

      <ul>
        {filteredBooks.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author} (Rating: {book.rating})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
