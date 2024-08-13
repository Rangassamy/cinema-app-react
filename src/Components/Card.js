import React, { useState, useEffect } from "react";

function Card({ movie }) {
  const {
    title,
    release_date,
    vote_average,
    genre_ids,
    overview,
    poster_path,
  } = movie;

  const genres = {
    28: "Action",
    12: "Aventure",
    16: "Animation",
    35: "Comédie",
    80: "Crime",
    99: "Documentaire",
    18: "Drame",
    10751: "Familial",
    14: "Fantastique",
    36: "Histoire",
    27: "Horreur",
    10402: "Musique",
    9648: "Mystère",
    10749: "Romance",
    878: "Science-Fiction",
    10770: "Téléfilm",
    53: "Thriller",
    10752: "Guerre",
    37: "Western",
  };

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favoriteMovies =
      JSON.parse(localStorage.getItem("favoriteMovies")) || [];
    const isAlreadyFavorite = favoriteMovies.some(
      (favMovie) => favMovie.id === movie.id
    );
    setIsFavorite(isAlreadyFavorite);
  }, [movie.id]);

  const handleToggleFavorite = () => {
    let favoriteMovies =
      JSON.parse(localStorage.getItem("favoriteMovies")) || [];

    if (isFavorite) {
      // Retirer le film des favoris
      favoriteMovies = favoriteMovies.filter(
        (favMovie) => favMovie.id !== movie.id
      );
      localStorage.setItem("favoriteMovies", JSON.stringify(favoriteMovies));
      setIsFavorite(false);
      alert(`${title} a été retiré de vos coups de cœur.`);
    } else {
      // Ajouter le film aux favoris
      favoriteMovies.push(movie);
      localStorage.setItem("favoriteMovies", JSON.stringify(favoriteMovies));
      setIsFavorite(true);
      alert(`${title} a été ajouté à vos coups de cœur !`);
    }
  };

  return (
    <div className="card">
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/original/${poster_path}`
            : "/img/poster.jpg"
        }
        alt={`${title} Poster`}
      />
      <h2>{title}</h2>
      <h5>Date de sortie : {release_date}</h5>
      <h4>
        Note : {vote_average.toFixed(2)} / 10
        <span>
          <i className="fa-solid fa-star"></i>
        </span>
      </h4>
      <ul>
        {genre_ids.map((id) => (
          <li key={id}>{genres[id]}</li>
        ))}
      </ul>
      <h3>Synopsis</h3>
      <p>{overview}</p>
      <div className="btn" onClick={handleToggleFavorite}>
        {isFavorite ? "Retirer des coups de cœur" : "Ajouter aux coups de cœur"}
      </div>
    </div>
  );
}

export default Card;
