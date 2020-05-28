import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Signup from "./components/pages/Signup";
import LandingPage from "./components/pages/LandingPage";
import ConcernQRCode from "./components/pages/ConcernQRCode";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/landingpage/:id" component={LandingPage} />
        <Route path="/concernqrcode/:name/:id" component={ConcernQRCode} />
      </div>
    </Router>
  );
}

// testcomment

export default App;
