import React, { useState } from "react";
import LoginForm from "./LoginFrom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      <h1>Lift State Up Demo</h1>

      {isLoggedIn ? (
        <h2>Welcome User!</h2>
      ) : (
        <LoginForm
          isLoggedIn={isLoggedIn}
          handleLogin={handleLogin}
        />
      )}
    </div>
  );
}

export default App;