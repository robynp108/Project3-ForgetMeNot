import React from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../Navbar";


function Home() {
    const location = useLocation();

    return (
        <div>
            <Navbar />
            <div className="field is-grouped is-grouped-centered">
                <h1 className="title">
                    Forget Me Not
                </h1>
            </div>
            <br />
            <div className="field is-grouped is-grouped-centered">
                <div className="box" style={{width: "50%", marginLeft: "25px"}}>
                    <p>The worry over whether we remembered to do certain things can be a major life disruption.
                        Forget Me Not can help you remember! By applying a QR code to each thing that causes you
                        concern, then scanning that code whenever you do the task, this app will record the time it
                        was done so you can confirm it anytime. A few easy steps can let you check what you’ve done
                        and relax.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;