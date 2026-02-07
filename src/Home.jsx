import { Link } from "react-router-dom";
import { useState } from "react";
import MovieCard from "./MovieCard";

function Home({ movies, favorites, toggleFavorite }) {
  const [search, setSearch] = useState("");

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <nav className="navbar">
        <h2 className="logo">Movie Explorer</h2>
        <Link to="/favorites" className="nav-link">❤️ My Favorites ({favorites.length})</Link>
      </nav>

      <div className="container">
        <header className="header-box">
          <h1>Discover Movies</h1>
          <input
            className="search"
            type="text"
            placeholder="Search movies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </header>

        <div className="movie-list">
          {filteredMovies.map((movie) => (
            <MovieCard
              key={movie.title}
              movie={movie}
              isFavorite={favorites.some((m) => m.title === movie.title)}
              onToggleFavorite={() => toggleFavorite(movie)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
