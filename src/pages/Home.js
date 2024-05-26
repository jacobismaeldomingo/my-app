import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

// Home component which accepts visits and setVisits as props
const Home = ({ visits, setVisits }) => {
  // useEffect hook
  useEffect(() => {
    // Increment the visits count each time the Home page is visited
    setVisits(visits + 1);
  }, []);

  return (
    <div className="d-flex flex-column gap-2 ms-3 mt-3">
      <h1>Home Page</h1>
      <p>B00859343</p>
      <Link to="/">Back to Welcome Page</Link>
    </div>
  );
};

export default Home;
