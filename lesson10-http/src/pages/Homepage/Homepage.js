import { useState, useEffect } from "react";
import "./Homepage.css";
import MovieCard from "../../components/MovieCard/MovieCard";

const Homepage = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  // Bước 1: đăng ký tk themoviedb để lấy api key
  // Bước 2: Gọi API
  // Bước 3: Set data => state
  const onFetchPopularMovies = () => {
    console.log("3. API call");
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=f5604f45a67acfff1cd1e7f5065da619"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("4. Update state");
        setPopularMovies(data.results);
      });
  };

  // useEffect với empty dependencies chỉ chạy 1 lần duy nhất (mounting)
  useEffect(() => {
    console.log("2. Effect runs");
    onFetchPopularMovies();
  }, []);

  const movieListElement = popularMovies.map((movie, index) => {
    return <MovieCard data={movie} key={movie.id} />;
  });

  return (
    <div className="container">
      {console.log("1.First render")}
      <h1 className="section-title">Popular movies</h1>
      <div className="movie-list">{movieListElement}</div>
    </div>
  );
};

export default Homepage;
