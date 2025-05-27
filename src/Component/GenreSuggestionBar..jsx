import React from 'react';

export default function GenreSuggestionBar({ genres, selectedGenreId, onGenreSelect }) {
  return (
    <nav
      className="genre-bar"
      aria-label="Genre suggestions"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 10,
        marginBottom: 25,
      }}
    >
      <button
        className={`genre-btn ${selectedGenreId === null ? 'active' : ''}`}
        onClick={() => onGenreSelect(null)}
        style={selectedGenreId === null ? activeButtonStyle : buttonStyle}
      >
        All
      </button>
      {genres.map(genre => (
        <button
          key={genre.id}
          className={`genre-btn ${selectedGenreId === genre.id ? 'active' : ''}`}
          onClick={() => onGenreSelect(genre.id)}
          style={selectedGenreId === genre.id ? activeButtonStyle : buttonStyle}
        >
          {genre.name}
        </button>
      ))}
    </nav>
  );
}

const buttonStyle = {
  backgroundColor: '#222',
  border: 'none',
  borderRadius: 30,
  color: 'rgb(234, 234, 252)',
  padding: '8px 18px',
  fontWeight: 600,
  cursor: 'pointer',
  boxShadow: '0 4px 10px rgba(1, 180, 228, 0.3)',
  transition: 'background-color 0.25s ease, color 0.25s ease, box-shadow 0.25s ease',
};

const activeButtonStyle = {
  ...buttonStyle,
  backgroundColor: 'rgb(118, 118, 228)',
  color: '#fff',
  boxShadow: '0 6px 20px rgb(16, 177, 221)',
  outline: 'none',
};
