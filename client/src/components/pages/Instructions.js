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
                <div className="box" style={{ width: "50%", marginLeft: "25px" }}>
                    <ul>
                        <li style={{ fontWeight: "bold" }}>INSTRUCTIONS</li>
                        <li>1. Sign up for an account</li>
                        <li>2. Start creating your list of concerns! Just enter names like “Oven off” and “Took
                            morning meds”.</li>
                        <li>3. The concern will appear on the list with a link to a QR Code.</li>
                        <li>4. Click “QR Code” to see a page with that concern’s QR Code.</li>
                        <li>5. Print the code and tape it on or near the item of concern.</li>
                        <li>6. Whenever you do the task, just scan the code with a QR scanner on your phone, go to that
                            website, and you’ll see a page telling you the scan was successful.</li>
                        <li>7. Use the Home button to return to your Home page and you will see the time recorded on
                            your list!</li>
                        <li>8. Stay logged in to quickly see your list anytime.</li>
                    </ul>
                </div>
            </div>
            <br />
            <div className="field is-grouped is-grouped-centered">
                <div className="box" style={{ width: "50%", marginLeft: "25px" }}>
                    <ul>
                        <li style={{ fontWeight: "bold" }}>SAMPLE CONCERN LIST</li>
                        <li>“QR Code” Oven off, Wed, May 27th 2020, 6:10:01 pm</li>
                        <li>“QR Code” Pantry closed, Wed, May 27th 2020, 10:54:25 am</li>
                        <li>“QR Code” Front door locked, Wed, May 27th 2020, 5:50:06 pm</li>
                    </ul>
                </div>
            </div>
            <br />
            <div className="field is-grouped is-grouped-centered">
                <h2 className="title">
                    Ready to start?
                </h2>
            </div>
            <br />
            <div className="container">
                {/* <div className="field is-grouped is-grouped-centered">
                    <button className="button is-hsl(271, 100%">
                    <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"} style={{color: "white"}}>
                        Start
                    </Link>
                    </button>
                </div> */}
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
            <br />
        </div>
    );
}

export default Home;