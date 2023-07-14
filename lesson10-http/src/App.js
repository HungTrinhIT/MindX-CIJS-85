import "./App.css";
import {  Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage/Homepage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Header from "./components/Header/Header";
import MovieDetail from "./pages/MovieDetail/MovieDetail";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/movies/:movieId" element={<MovieDetail />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
/*
  Homepage:       /
  Login:          /login
  Signup          /signup
  Movie Detail    /movies/:id
  Page not found  /đường-dẫn-còn-lại
*/
