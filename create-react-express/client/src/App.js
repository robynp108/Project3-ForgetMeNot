import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import LandingPage from "./components/pages/LandingPage";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/landingpage/:id" component={LandingPage} />
      </div>
    </Router>
  );
}

export default App;
