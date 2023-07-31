import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css";

const MovieCard = (props) => {
  const { data } = props;
  const { title, poster_path, id } = data;

  const imageURL = `https://image.tmdb.org/t/p/original${poster_path}`;
  const toMovieDetailPage = `/movies/${id}`;
  return (
    <Link to={toMovieDetailPage} className="movie-card">
      <div>
        <img src={imageURL} alt={title} />
        <h6>{title}</h6>
      </div>
    </Link>
  );
};

export default MovieCard;
