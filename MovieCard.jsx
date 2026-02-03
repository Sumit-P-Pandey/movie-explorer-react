function MovieCard({ movie, isFavorite, onToggleFavorite }) {
  return (
    <div className="movie-card">
      <h3>{movie.title}</h3>
      <p>⭐ {movie.rating}</p>
      <button onClick={onToggleFavorite}>
        {isFavorite ? "❤️ Remove" : "🤍 Add to Favorites"}
      </button>
    </div>
  );
}

export default MovieCard;
