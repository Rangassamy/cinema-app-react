import React, { useState, useEffect } from "react";
import Card from "../Components/Card";
import "../styles/index.scss";
import Form from "../Components/Form";

function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("spiderman");
  const [goodToBad, setgoodToBad] = useState(false);
  const [badToGood, setbadToGood] = useState(false);

  useEffect(() => {
    // Fetch les films quand le composant est monté ou quand 'search' change
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=${search}&language=fr-FR`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, [search]); // Ajout de 'search' comme dépendance pour que fetch soit rappelé quand 'search' change

  useEffect(() => {
    // Ajouter l'écouteur d'événement sur le formulaire après le premier rendu
    const form = document.querySelector("form");
    const handleSubmit = (e) => {
      e.preventDefault();
      setSearch(document.getElementById("search").value);
    };

    form.addEventListener("submit", handleSubmit);

    // Attaching event listeners to existing divs with the specified IDs
    const goodToBadDiv = document.getElementById("goodToBad");
    const badToGoodDiv = document.getElementById("badToGood");

    const handleGoodToBadClick = () => {
      setgoodToBad(true);
      setbadToGood(false);
    };

    const handleBadToGoodClick = () => {
      setbadToGood(true);
      setgoodToBad(false);
    };

    goodToBadDiv.addEventListener("click", handleGoodToBadClick);
    badToGoodDiv.addEventListener("click", handleBadToGoodClick);

    // Cleanup event listeners when the component is unmounted
    return () => {
      goodToBadDiv.removeEventListener("click", handleGoodToBadClick);
      badToGoodDiv.removeEventListener("click", handleBadToGoodClick);
      form.removeEventListener("submit", handleSubmit);
    };
  }, []);

  const sortedMovies = [...movies];
  if (goodToBad) {
    sortedMovies.sort((a, b) => b.vote_average - a.vote_average);
  } else if (badToGood) {
    sortedMovies.sort((a, b) => a.vote_average - b.vote_average);
  }

  return (
    <div>
      <Form />
      <div
        className="card-container"
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {sortedMovies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;
