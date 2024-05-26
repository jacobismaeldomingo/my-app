import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css"; // Added styling for better UI

// Root component to manage the state and routing
const Root = () => {
  // useState hook to track the number of visits to the Home page
  const [visits, setVisits] = useState(0);

  // createBrowserRouter to define routes
  const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
      },
    {
      path: "/home",
      element: <Home visits={visits} setVisits={setVisits} />,
      errorElement: <Error />,
    },
    {
      path: "/about",
      element: <About visits={visits} />,
      errorElement: <Error />,
    },
    {
      path: "/contact",
      element: <Contact visits={visits} />,
      errorElement: <Error />,
    },
  ]);

  // RouterProvider to provide the router to the application
  return <RouterProvider router={router} />;
};

// Render the App component to the DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
