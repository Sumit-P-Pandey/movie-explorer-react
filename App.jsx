import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./Home";
import Favorites from "./Favorites";
import "./App.css";

const MOVIES = [
  { title: "Interstellar", rating: "8.6" },
  { title: "Inception", rating: "8.8" },
  { title: "Joker", rating: "8.3" },
  { title: "Dune", rating: "8.5" },
];

function App() {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (movie) => {
    setFavorites((prev) =>
      prev.some((m) => m.title === movie.title)
        ? prev.filter((m) => m.title !== movie.title)
        : [...prev, movie]
    );
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              movies={MOVIES}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <Favorites
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
