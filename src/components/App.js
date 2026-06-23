import React, { useState } from "react";
import Login from "./LoginFrom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      <h1>{isLoggedIn ? "Welcome User!" : "Please Login"}</h1>

      {!isLoggedIn && (
        <Login
          isLoggedIn={isLoggedIn}
          handleLogin={handleLogin}
        />
      )}
    </div>
  );
}

export default App;