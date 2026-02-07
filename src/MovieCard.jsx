function MovieCard({ movie, isFavorite, onToggleFavorite }) {
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.poster} alt={movie.title} />
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>⭐ {movie.rating}</p>
        <button 
          onClick={onToggleFavorite}
          className={isFavorite ? "btn-remove" : "btn-add"}
        >
          {isFavorite ? "❤️ Remove" : "🤍 Add Favorite"}
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
