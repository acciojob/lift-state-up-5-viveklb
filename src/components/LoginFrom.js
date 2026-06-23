import React from "react";

function Login({ handleLogin }) {
  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin();
  };

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