import React from 'react';
import Book from './Book';
import './BookList.css';

function BookList({ books, addReview }) {
    return (
        <div className="book-list">
            <h2>Book List</h2>
            {books.map((book) => (
                <Book key={book.id} book={book} addReview={addReview} />
            ))}
        </div>
    );
}

export default BookList;
