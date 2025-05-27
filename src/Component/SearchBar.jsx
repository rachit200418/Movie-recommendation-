import React from 'react';

export default function SearchBar({ inputValue, onSearchChange }) {
  return (
    <div
      className="search-bar"
      role="search"
      style={{ width: '100%', maxWidth: 400, margin: '0 auto 15px auto', textAlign: 'center' }}
    >
      <input
        type="search"
        placeholder="Search movies..."
        value={inputValue}
        onChange={e => onSearchChange(e.target.value)}
        aria-label="Search movies"
        autoComplete="off"
        style={{
          width: '100%',
          padding: '10px 15px',
          fontSize: '15px',
          borderRadius: 25,
          border: 'none',
          outline: 'none',
          boxShadow: '0 4px 12px rgba(1, 180, 228, 0.4)',
          transition: 'box-shadow 0.3s ease',
          backgroundColor: '#222',
          color: '#fff',
        }}
      />
    </div>
  );
}
