import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const MovieDetail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [movieDetail, setMovieDetail] = useState({});

  const fetchMovieDetail = () => {
    const apiURL = `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=f5604f45a67acfff1cd1e7f5065da619`;
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        setMovieDetail(data);
      });
  };
  
  //   Call API fetching file detail by id
  useEffect(() => {
    fetchMovieDetail();
  }, []);

  const { title, poster_path, backdrop_path } = movieDetail;

  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default MovieDetail;
