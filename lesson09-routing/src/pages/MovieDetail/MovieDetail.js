import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const MovieDetail = () => {
  const params = useParams();

  const navigate = useNavigate();

  //   Call API fetching file detail by id
  useEffect(() => {}, []);

  const onHandleWatchMovie = () => {
    const isAuth = true;
    // Chưa đăng nhập vào hệ thống
    // Trỏ sang trang /login
    if (isAuth) {
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  return (
    <div>
      <h1>MovieDetail</h1>
      <h2>
        <strong>Movie ID:</strong> {params.movieId}
      </h2>
      <button onClick={onHandleWatchMovie}>Xem phim</button>
    </div>
  );
};

export default MovieDetail;
