import React from 'react';

const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export default function MovieCard({ movie, onSelect }) {
  return (
    <div
      className="movie-card"
      onClick={() => onSelect(movie.id)}
      title={movie.title}
      tabIndex={0}
      onKeyDown={e => { if (e.key === 'Enter') onSelect(movie.id); }}
      style={{
        backgroundColor: 'rgb(235, 219, 226)',
        borderRadius: '10px',
        overflow: 'hidden',
        width: 180,
        cursor: 'pointer',
        boxShadow: '0 5px 15px rgba(1, 180, 228, 0.4)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      onMouseOver={e => {
        e.currentTarget.style.transform = 'scale(1.05)';
        e.currentTarget.style.boxShadow = '0 8px 25px rgba(1, 180, 228, 0.8)';
      }}
      onMouseOut={e => {
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.boxShadow = '0 5px 15px rgba(1, 180, 228, 0.4)';
      }}
    >
      <img
        className="movie-poster"
        src={movie.poster_path ? TMDB_IMAGE_BASE_URL + movie.poster_path : "https://via.placeholder.com/500x750?text=No+Image"}
        alt={movie.title}
        style={{ width: '100%', height: 270, objectFit: 'cover', borderBottom: '1px solid black' }}
      />
      <div
        className="movie-info"
        style={{ padding: 10, textAlign: 'center', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
      >
        <h3
          className="movie-title"
          style={{ fontWeight: 700, fontSize: '15px', margin: '0 0 5px 0', lineHeight: 1.2 }}
        >
          {movie.title.length > 25 ? movie.title.slice(0, 22) + "..." : movie.title}
        </h3>
        <div className="movie-date" style={{ fontSize: '12px', color: 'rgb(96, 96, 121)', marginBottom: 5 }}>
          {movie.release_date}
        </div>
        <p className="movie-overview" style={{ fontSize: '15px', color: 'rgb(111, 111, 117)', flexGrow: 1, marginBottom: 0 }}>
          {movie.overview.length > 100 ? movie.overview.slice(0, 97) + "..." : movie.overview}
        </p>
      </div>
    </div>
  );
}
