import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Start from "./components/pages/Start";
import Instructions from "./components/pages/Instructions";
import Home from "./components/pages/Home";
import ManageList from "./components/pages/ManageList";
// import QrScanner from "./components/QrScanner";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import LandingPage from "./components/pages/LandingPage";
import ConcernQRCode from "./components/pages/ConcernQRCode";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Start} />
        <Route exact path="/instructions" component={Instructions} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/managelist" component={ManageList} />
        {/* <Route path="/qrscanner" component={QrScanner} /> */}
        <Route path="/landingpage/:id" component={LandingPage} />
        <Route path="/concernqrcode/:name/:id" component={ConcernQRCode} />
      </div>
    </Router>
  );
}

export default App;
