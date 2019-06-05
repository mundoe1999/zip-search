import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ZipCodeFetch from "./zipcode";
import CityFetch from "./city";

function Index() {
  return <h2>Home</h2>;
}

function City() {
  return <h2>City Search</h2>;
}

function ZipCode() {
}

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/City/">City</Link>
            </li>
            <li>
              <Link to="/ZipCode/">ZipCode</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/City/" component={CityFetch} />
        <Route path="/ZipCode/" component={ZipCodeFetch} />
      </div>
    </Router>
  );
}

export default AppRouter;

