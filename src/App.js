import React from "react";
import { Link } from "react-router-dom";

// App component serving as the Welcome Page with navigation links to Home, About, and Contact pages
const App = () => {
  return (
    <div className="d-flex flex-column gap-2 ms-3 mt-3">
      <h1>Welcome Page</h1>
      <h4>Simple State Management Website</h4>
      <h5>CSCI 3130 - Jacob Domingo</h5>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default App;
