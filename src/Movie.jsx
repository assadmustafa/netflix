import React from "react";

const Movie = ({movie: { Year, Poster, Title, Type }}) => {
  return (
    <div className="movie" >
      <a href="/">
      <div>
        <p>{Year + " " +Type}</p>
      </div>
      <div>
      <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
      </div>
      <div>
        
        <h3> {Title} </h3>
        
      </div>
      </a>
    </div>
  );
};

export default Movie;