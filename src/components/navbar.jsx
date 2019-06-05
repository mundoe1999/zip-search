import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Index() {
  return <h2>Home</h2>;
}

function City() {
  return <h2>City Search</h2>;
}

function ZipCode() {
  return <h2>Zip-Code Search</h2>;
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
        <Route path="/City/" component={City} />
        <Route path="/ZipCode/" component={ZipCode} />
      </div>
    </Router>
  );
}

export default AppRouter;

