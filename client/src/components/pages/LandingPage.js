import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import API from "../../utils/API";
import Navbar from "../Navbar";



function LandingPage(props) {
  console.log(props.match.params.id);
  const concernId = props.match.params.id;

  useEffect(() => {
    API.updateLastCheck(concernId);
  }, [concernId]);

  const location = useLocation();

  return (
    <div>
      <Navbar />
      <section className="section">
        {/* <div className="field is-grouped is-grouped-centered">
          <h1 className="title" style={{ fontFamily: "'Kalam', cursive" }}>
            ForgetMeNot
            </h1>
        </div> */}
        
        <div className="field is-grouped is-grouped-centered">
          <h1 style={{ fontFamily: "'Kalam', cursive", fontSize: "x-large" }}>
            Scan successful!
            </h1>
        </div>
        {/* <div className="field is-grouped is-grouped-centered">
          <button className="button is-hsl(271, 100%">
            <Link to="/home" className={location.pathname === "/home" ? "nav-link active" : "nav-link"} style={{ color: "white" }}>
              Home
            </Link>
          </button>
          <button className="button is-hsl(271, 100%">
            <Link to="/qrscanner" className={location.pathname === "/qrscanner" ? "nav-link active" : "nav-link"} style={{ color: "white" }}>
              QR Scanner
            </Link>
          </button>
        </div> */}
      </section>
    </div>
  );
}

export default LandingPage;