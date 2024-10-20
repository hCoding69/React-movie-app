import { useParams } from "react-router-dom";
import Nav from "./Nav";
import React, { useEffect, useState } from 'react';
function MoviePage(){
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState("movie");



  useEffect(() => {
    if (input) {
      fetch(`https://www.omdbapi.com/?s=${input}&apikey=c095b64`)
        .then((res) => res.json())
        .then((data) => {
          if (data.Response === "True") {
            setMovies(data.Search);
            setError(null); // Clear error if there are results
          } else {
            setMovies([]);
            setError(data.Error); // Handle errors like "Movie not found"
          }
        })
        .catch(() => {
          setError("Something went wrong. Please try again later.");
        });
    }
  }, [input]);
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };
  const params =  useParams();
  return (
    <div className="page w-100">
      <Nav handleInputChange={handleInputChange}
            movies = {movies}
        />

      <div className="content">
        <div className="bx">
          <p className="big">The Substance</p>
          <span>2024</span>
          <span>2h21m</span>
        </div>
        <div className="bx">
          <p className="big">The Substance</p>
          <span>2024</span>
          <span>2h21m</span>
        </div>
      </div>
    </div>
  )

}

export default MoviePage;