import React, { useEffect } from "react";
import API from "../../utils/API";
import "./project3.css";

function LandingPage(props) {
  console.log(props.match.params.id);
  const concernId = props.match.params.id;

  useEffect(() => {
    API.updateLastCheck(concernId);
  }, [concernId]);

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
                <button className="button is-hsl(271, 100%">Home</button>
            </div>
        </form>
    </section>
    </div>
  );
}

export default LandingPage;