import React from "react";
import { Link } from "react-router-dom";

// Contact component which accepts visits as a prop
const Contact = ({ visits }) => {
  // Display the number of times the Home page has been visited
  return (
    <div className="d-flex flex-column gap-2 ms-3 mt-3">
      <h1>Contact Page</h1>
      <p>Welcome to the Contact Page</p>
      <p>Home page visited {visits} times</p>
      <Link to="/">Back to Welcome Page</Link>
    </div>
  );
};

export default Contact;
