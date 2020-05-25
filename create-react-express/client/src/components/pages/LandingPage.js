import React from "react";
import "./project3.css";

function LandingPage(props) {
  console.log(props.match.params.id);

  
  return (
    <div>
      <section class="section">
        <div class="field is-grouped is-grouped-centered">
            <h1 class="title">
                Forget Me Not
            </h1>
        </div>
        <div class="field is-grouped is-grouped-centered">
            <button class="button is-link">Scan Successful!</button>
        </div>
        <form>
            <div class="field is-grouped is-grouped-centered">
                <button class="button is-hsl(271, 100%">Home</button>
            </div>
        </form>
    </section>
    </div>
  );
}

export default LandingPage;