import React, { useState } from 'react';

function SearchBar({ books, onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Filtered books based on the search query
    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    onSearch(filteredBooks);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for books"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
