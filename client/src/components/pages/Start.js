import React from "react";
import { Link, useLocation } from "react-router-dom";


function Home() {
    const location = useLocation();

    return (
        <div>
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
            <br />
            <div className="field is-grouped is-grouped-centered">
                <h2 className="title">
                    See how it works!
                </h2>
            </div>
            <br />
            <div className="field is-grouped is-grouped-centered">
                <button className="button is-hsl(271, 100%">
                  <Link to="/instructions" className={location.pathname === "/instructions" ? "nav-link active" : "nav-link"} style={{color: "white"}}>
                      Instructions
                  </Link>
                </button>
            </div>
            <br />
            <div className="field is-grouped is-grouped-centered">
                <h2 className="title">
                    Ready to start?
                </h2>
            </div>
            <br />
            <div className="container">
                <div className="field is-grouped is-grouped-centered">
                    <div>
                        <button className="button">
                            <Link to="/login" className={location.pathname === "/login" ? "nav-link active" : "nav-link"} style={{ color: "white" }}>
                                Login
                            </Link>
                        </button>
                    </div>

                    <div>
                        <button className="button is-link">
                            <Link to="/signup" className={location.pathname === "/signup" ? "nav-link active" : "nav-link"} style={{ color: "white" }}>
                                SignUp
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;