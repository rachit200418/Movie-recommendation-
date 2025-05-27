import React from 'react';

const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export default function MovieDetails({ movie, onBack }) {
  if (!movie) 
    return null;

  return (
    <section
      className="movie-details"
      aria-label="Movie Details"
      style={{
        maxWidth: 900,
        background: '#222',
        borderRadius: 15,
        padding: 20,
        marginTop: 30,
        boxShadow: '0 8px 25px rgba(1, 180, 228, 0.6)',
        color: '#eee',
        gap: 20,
      }}
    >
      <div
        className="details-poster"
        style={{
         width: 500 ,
          flex: '1 1 300px',
          display:'block',
          margin:'auto',
          borderRadius: 15,
          overflow: 'hidden',
          boxShadow: '0 5px 15px rgba(1,180,228,0.5)',
        }}
      >
        <img
          src={movie.poster_path ? TMDB_IMAGE_BASE_URL + movie.poster_path : "https://via.placeholder.com/500x750?text=No+Image"}
          alt={movie.title}
          style={{ width: '100%', height: '50%', display: 'block', objectFit: 'cover' }}
        />
      </div>
      <div className="details-info" style={{ flex: '2 1 400px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
        <h2 className="details-title" style={{ fontSize: '30px', fontWeight: 800, marginBottom: 10, color: 'rgb(118, 118, 228)' }}>
          {movie.title}
        </h2>
        {movie.tagline && <div className="details-tagline" style={{ fontStyle: 'italic', color: 'rgb(94, 94, 235)', marginBottom: 15 }}>"{movie.tagline}"</div>}
        <p className="details-overview" style={{ fontSize: '16px', lineHeight: 1.5, marginBottom: 15 }}>
          {movie.overview}
        </p>
        <div className="details-info-row" style={{ marginBottom: 10, fontSize: '15px' }}>
          <strong style={{color: 'rgb(118, 118, 228)'}}>Release Date:</strong> {movie.release_date}
        </div>
        <div className="details-info-row" style={{ marginBottom: 10, fontSize: '15px' }}>
          <strong style={{color: 'rgb(118, 118, 228)'}}>Rating:</strong> {movie.vote_average} / 10 ({movie.vote_count} votes)
        </div>
        <div className="details-info-row" style={{ marginBottom: 10, fontSize: '15px' }}>
          <strong style={{color: 'rgb(118, 118, 228)'}}>Runtime:</strong> {movie.runtime} min
        </div>
        <div className="details-info-row" style={{ marginBottom: 10, fontSize: '15px' }}>
          <strong style={{color: 'rgb(118, 118, 228)'}}>Genres:</strong> {movie.genres.map(g => g.name).join(", ")}
        </div>
        <button
          onClick={onBack}
          style={{
            marginTop: 20,
            backgroundColor: 'rgb(118, 118, 228)',
            border: 'none',
            color: 'white',
            padding: '10px 20px',
            fontSize: '15px',
            borderRadius: 19,
            cursor: 'pointer',
            display : 'block',
            margin:'auto',
          }}
        >
          Back to list
        </button>
      </div>
    </section>
  );
}
