import React from "react";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div>
      <form>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input id="password" name="password" />
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
