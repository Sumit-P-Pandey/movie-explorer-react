import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

function Favorites({ favorites, toggleFavorite }) {
  return (
    <>
      <nav className="navbar">
        <h2 className="logo">Movie Explorer</h2>
        <Link to="/">🏠 Home</Link>
      </nav>

      <div className="container">
        <header className="header-box">
          <h1>Your Favorites</h1>
          <p>Movies you have saved</p>
        </header>

        <div className="movie-list">
          {favorites.length === 0 ? (
            <p className="empty">No favorites added yet</p>
          ) : (
            favorites.map((movie) => (
              <MovieCard
                key={movie.title}
                movie={movie}
                isFavorite={true}
                onToggleFavorite={() => toggleFavorite(movie)}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default Favorites;
