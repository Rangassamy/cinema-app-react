import React, { useState, useEffect } from "react";
import Card from "../Components/Card";
import "../styles/index.scss";
import Form from "../Components/Form";
function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=spiderman&language=fr-FR"
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <div>
      <Form />
      <div
        className="card-container"
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;
