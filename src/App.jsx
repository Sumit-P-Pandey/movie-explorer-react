import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./Home";
import Favorites from "./Favorites";
import "./App.css";

const MOVIES = [
  { title: "Interstellar", rating: "8.6", poster: "data:image/webp;base64,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" },
  { title: "Inception", rating: "8.8", poster: "https://c8.alamy.com/comp/P3RPBT/original-film-title-inception-english-title-inception-film-director-christopher-nolan-year-2010-credit-warner-bross-picturessyncopylegendary-pictures-album-P3RPBT.jpg" },
  { title: "Joker", rating: "8.3", poster: "https://images-cdn.ubuy.co.in/6345f652ec87e81aa558cd24-ubuy-online-shopping.jpg" },
  { title: "Dune", rating: "8.5", poster: "https://filmartgallery.com/cdn/shop/files/Dune-Part-Two-Vintage-Movie-Poster-Original-1-Sheet-27x41.jpg?v=1710903897" },
  { title: "The Dark Knight", rating: "9.0", poster: "https://tse1.explicit.bing.net/th/id/OIP.LDEPxqWgLlrq9DlAVrfXkwHaLH?rs=1&pid=ImgDetMain&o=7&rm=3" },
  { title: "Avatar", rating: "7.9", poster: "https://tse3.mm.bing.net/th/id/OIP.8_9IEZWIbdh9MH2s_8ZrlgHaLH?rs=1&pid=ImgDetMain&o=7&rm=3" },
  { title: "The Matrix", rating: "8.7", poster: "https://www.rogerebert.com/wp-content/uploads/2024/03/The-Matrix.jpg" },
  { title: "Gladiator", rating: "8.5", poster: "https://static1.srcdn.com/wordpress/wp-content/uploads/2024/07/gladiator-2-2024-new-film-poster.jpg" },
  { title: "Parasite", rating: "8.6", poster: "" },
  { title: "The Prestige", rating: "8.5", poster: "" },
  { title: "Whiplash", rating: "8.5", poster: "" },
  { title: "Arrival", rating: "7.9", poster: "" },
  { title: "Tenet", rating: "7.3", poster: "" },
  { title: "Memento", rating: "8.4", poster: "" },
  { title: "Chavva", rating: "8.3", poster: "" },
  { title: "Dhurandhar", rating: "8.6", poster: "" }
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
        <Route path="/" element={<Home movies={MOVIES} favorites={favorites} toggleFavorite={toggleFavorite} />} />
        <Route path="/favorites" element={<Favorites favorites={favorites} toggleFavorite={toggleFavorite} />} />
      </Routes>
    </Router>
  );
}

export default App;
