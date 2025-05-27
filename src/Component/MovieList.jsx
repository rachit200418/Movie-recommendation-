import React from 'react';
import MovieCard from './MovieCard';

export default function MovieList({ movies, onSelect }) {
  if (movies.length === 0) {
    return <p style={{textAlign: 'center', fontSize: '18px', color: '#ccc', marginTop: '30px'}}>🚫 No movies found.</p>;
  }
  return (
    <div
      className="container"
      aria-label="Movie List"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth: 1200,
        gap: 20,
        justifyContent: 'center',
        width: '100%',
      }}
    >
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} onSelect={onSelect} />
      ))}
    </div>
  );
}
