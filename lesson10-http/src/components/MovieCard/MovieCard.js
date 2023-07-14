import React from "react";
import "./MovieCard.css";

const MovieCard = (props) => {
  const { data } = props;
  const { title, poster_path, id } = data;

  const imageURL = `https://image.tmdb.org/t/p/original${poster_path}`;
  return (
    <div className="movie-card">
      <img src={imageURL} alt={title} />
      <h6>{title}</h6>
    </div>
  );
};

export default MovieCard;
