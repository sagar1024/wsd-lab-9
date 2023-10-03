import React, { useState } from 'react';
import './Book.css';

function Book({ book, addReview }) {
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0);

    const handleReviewSubmit = () => {
        // Implement review submission logic here
        if (review && rating > 0) {
            addReview(book.id, { review, rating });
            setReview('');
            setRating(0);
        }
    };

    return (
        <div className="book">
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Rating: {book.rating}</p>
            <textarea
                placeholder="Write your review here"
                value={review}
                onChange={(e) => setReview(e.target.value)}
            ></textarea>
            <input
                type="number"
                placeholder="Rating (1-5)"
                value={rating}
                onChange={(e) => setRating(parseInt(e.target.value))}
            />
            <button onClick={handleReviewSubmit}>Submit Review</button>
        </div>
    );
}

export default Book;
