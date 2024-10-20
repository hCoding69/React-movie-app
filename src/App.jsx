import Nav from './Nav';
import 'bootstrap/dist/css/bootstrap.css';
import Card from './Card';
import React, { useEffect, useState } from 'react';

function App() {
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState("movie");
  const [error, setError] = useState(null);
  const [statiq, setStatiq] = useState([]);

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

  useEffect(() =>{
    fetch("https://www.omdbapi.com/?s=movie&apikey=c095b64")
    .then((res)=>res.json())
    .then((data)=> setStatiq(data.Search))
  }, [])

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="page w-100">
      <Nav handleInputChange={handleInputChange}
          movies = {movies}
            />
      <div className="heading">
        <div className="container">
          <h1 className="mt-5 mb-3">What to Watch - FLICK</h1>
        </div>
      </div>

      <div className="movies mt-5 pt-5">
        <div className="container">
          <div className="row gap-3 justify-content-center">
            {

              statiq.map((element, index) => (
                <Card
                  key={index}
                  title={element.Title}
                  link={element.Poster}
                  id={element.imdbID}
                />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
