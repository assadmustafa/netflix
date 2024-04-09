import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import "./App.css";
import SearchIcon from "./search.svg";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=7ef3c17d";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm,setSearchTerm] = useState('');

  useEffect(() => {
    searchMovies("Batman");
    
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };


  return (
    <div className="app">
      <a href="/"><h1>Netflix</h1></a>
      
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        ></input>
        <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)} />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2> No movies found!</h2>
        </div>
      )}
    </div>
    
  );
};

export default App;
