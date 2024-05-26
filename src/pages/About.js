import React from "react";
import { Link } from "react-router-dom";

// About component which accepts visits as a prop
const About = ({ visits }) => {
  // Display the number of times the Home page has been visited
  return (
    <div className="d-flex flex-column gap-2 ms-3 mt-3">
      <h1>About Page</h1>
      <p>Welcome to the About Page</p>
      <p>Home page visited {visits} times</p>
      <Link to="/">Back to Welcome Page</Link>
    </div>
  );
};

export default About;
