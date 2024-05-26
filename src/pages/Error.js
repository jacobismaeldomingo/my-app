import React from "react";
import { Link } from "react-router-dom";

// Error component that handles incorrect/unknown links
const Error = () => {
  // Lets you return to the Home page
  return (
    <div className="d-flex flex-column gap-2 ms-3 mt-3">
      404 Not Found
      <Link to="/">Home</Link>
    </div>
  );
};

export default Error;
