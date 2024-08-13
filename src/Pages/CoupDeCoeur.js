import React, { useState, useEffect } from "react";
import Card from "../Components/Card";
import "../styles/index.scss";

function CoupDeCoeur() {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    // Récupérer les films favoris depuis le localStorage
    const storedFavorites =
      JSON.parse(localStorage.getItem("favoriteMovies")) || [];
    setFavoriteMovies(storedFavorites);
  }, []);

  const handleRemoveFavorite = (movieId) => {
    const updatedFavorites = favoriteMovies.filter(
      (movie) => movie.id !== movieId
    );
    setFavoriteMovies(updatedFavorites);
    localStorage.setItem("favoriteMovies", JSON.stringify(updatedFavorites));
  };

  return (
    <div>
      <div
        className="card-container"
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {favoriteMovies.length > 0 ? (
          favoriteMovies.map((movie) => (
            <Card
              key={movie.id}
              movie={movie}
              onRemoveFavorite={handleRemoveFavorite}
            />
          ))
        ) : (
          <p>Aucun film dans vos coups de cœur.</p>
        )}
      </div>
    </div>
  );
}

export default CoupDeCoeur;
