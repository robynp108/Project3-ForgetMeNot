import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import API from "../../utils/API";


function LandingPage(props) {
  console.log(props.match.params.id);
  const concernId = props.match.params.id;

  useEffect(() => {
    API.updateLastCheck(concernId);
  }, [concernId]);

  const location = useLocation();

  return (
    <div>
      <section className="section">
        <div className="field is-grouped is-grouped-centered">
            <h1 className="title">
                Forget Me Not
            </h1>
        </div>
        <div className="field is-grouped is-grouped-centered">
            <button className="button is-link">Scan Successful!</button>
        </div>
        <form>
            <div className="field is-grouped is-grouped-centered">
                <button className="button is-hsl(271, 100%">
                  <Link to="/home" className={location.pathname === "/home" ? "nav-link active" : "nav-link"} style={{color: "white"}}>
                      Home
                  </Link>
                </button>
            </div>
        </form>
    </section>
    </div>
  );
}

export default LandingPage;