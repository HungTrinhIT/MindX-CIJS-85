import { useEffect, useState } from "react";

/**
 * Custom hook
 * @param {movieType} movieType
 * @desc movieType is one of "popular" | "upcoming" | "top_rated"
 */
const useFetchMovieByType = (movieType = "popular") => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});

  const onFetchMovie = () => {
    const url = `https://api.themoviedb.org/3/movie/${movieType}?api_key=f5604f45a67acfff1cd1e7f5065da619`;
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
        setLoading(false);
      })
      .catch((error) => setError(error));
  };

  useEffect(() => {
    onFetchMovie();
  }, []);

  return {
    data,
    loading,
    error,
  };
};

export default useFetchMovieByType;
