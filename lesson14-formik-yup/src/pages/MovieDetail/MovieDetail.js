import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import APIServices from "../../services/APIServices";
import Loading from "../../components/Loading/Loading";

const MovieDetail = () => {
  const params = useParams();
  const [movieDetail, setMovieDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});

  const fetchMovieDetail = async () => {
    setLoading(true);
    try {
      const data = await APIServices.getMovieDetailById(params.movieId);
      setMovieDetail(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  //   Call API fetching file detail by id
  useEffect(() => {
    fetchMovieDetail();
  }, []);

  const { title, poster_path, backdrop_path } = movieDetail;

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default MovieDetail;
