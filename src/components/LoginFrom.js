import React from "react";

function Login({ isLoggedIn, handleLogin }) {
  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin();
  };

  if (isLoggedIn) {
    return null;
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Username"
      />
      <br />
      <input
        type="password"
        placeholder="Password"
      />
      <br />
      <button type="submit">
        Login
      </button>
    </form>
  );
}

export default Login;