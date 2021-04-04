import React from "react";
// import "./App.css";
import Home from "./PAGES/Home";
import Room from "./PAGES/Rooms";
import SingleRoom from "./PAGES/SingleRoom";
import ErrorPage from "./PAGES/ErrorPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./COMPONENTS/navbar/Navbar";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/rooms">
          <Room />
        </Route>

        <Route exact path="/rooms/:slug">
          <SingleRoom />
        </Route>

        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
}
