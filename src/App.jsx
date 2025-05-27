import React, { useState, useEffect } from 'react';
import MovieList from './Component/MovieList';
import SearchBar from './Component/SearchBar';
import MovieDetails from './Component/MovieDetails';
import GenreSuggestionBar from './Component/GenreSuggestionBar.';

const TMDB_API_KEY = "5c288e9deee346037e11554ab676cc06"; 
const TMDB_BASE_URL = "https://api.themoviedb.org/3";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [selectedMovieDetails, setSelectedMovieDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [genres, setGenres] = useState([]);
  const [selectedGenreId, setSelectedGenreId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchGenres();
    fetchPopularMovies();
  }, []);


  useEffect(() => {
    if (selectedMovieId) {
      fetchMovieDetails(selectedMovieId);
    }
  }, [selectedMovieId]);


  async function fetchPopularMovies(page = 1) {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${TMDB_BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=${page}`);
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      const data = await response.json();
      setMovies(prevMovies => [...prevMovies, ...data.results]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function fetchGenres() {
    try {
      const response = await fetch(`${TMDB_BASE_URL}/genre/movie/list?api_key=${TMDB_API_KEY}&language=en-US`);
      if (!response.ok) {
        throw new Error("Failed to fetch genres");
      }
      const data = await response.json();
      setGenres(data.genres);
    } catch (err) {
      setGenres([]);
    }
  }


  async function fetchMovieDetails(id) {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${TMDB_BASE_URL}/movie/${id}?api_key=${TMDB_API_KEY}&language=en-US`);
      if (!response.ok) {
        throw new Error("Failed to fetch movie details");
      }
      const data = await response.json();
      setSelectedMovieDetails(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }


  function handleSelectMovie(id) {
    setSelectedMovieId(id);
    setSelectedMovieDetails(null);
  }


  function handleBackToList() {
    setSelectedMovieId(null);
    setSelectedMovieDetails(null);
  }


  function handleSearchChange(value) {
    setSearchQuery(value);
  }


  function handleGenreSelect(genreId) {
    setSelectedGenreId(genreId);
  }


  function handleLoadMore() {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    fetchPopularMovies(nextPage);
  }

  const filteredMovies = movies.filter(movie => {
    const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = selectedGenreId === null || movie.genre_ids.includes(selectedGenreId);
    return matchesSearch && matchesGenre;
  });


  return (
    <main aria-label="Movie Recommendation Application" style={{ width: '100%', maxWidth: 1200, margin: '0 auto' }}>
      {!selectedMovieId && (
        <>
          <SearchBar inputValue={searchQuery} onSearchChange={handleSearchChange} />
          <GenreSuggestionBar genres={genres} selectedGenreId={selectedGenreId} onGenreSelect={handleGenreSelect} />
        </>
      )}




      {!selectedMovieId && !loading && !error && (
        <>
          <MovieList movies={filteredMovies} onSelect={handleSelectMovie} />
          <button onClick={handleLoadMore} style={{  marginTop: 20,
            backgroundColor: 'rgb(118, 118, 228)',
            border: 'none',
            color: 'white',
            padding: '10px 20px',
            fontSize: '15px',
            borderRadius: 19,
            cursor: 'pointer',
            display : 'block',
            margin:'auto', }}>
            Load More
          </button>
        </>
      )}


      {selectedMovieId && selectedMovieDetails && !loading && (
        <MovieDetails movie={selectedMovieDetails} onBack={handleBackToList} />
      )}
    </main>
  );
}