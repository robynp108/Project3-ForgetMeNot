import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation();

    return (
        <div>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/" style={{ fontFamily: "'Kalam', cursive", fontSize: "x-large"}}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_D2VOsb10Hq33rXLuX-8v80RRsix6WkMGEiwTtv_hxmaMC4nF&usqp=CAU" alt="small blue flower" width="80px" height="50px" />
                        ForgetMeNot
                    </a>

                    {/* <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a> */}
                </div>

                <div id="navbarBasicExample" className="navbar-menu is-active">
                    <div className="navbar-start">
                        <a className="navbar-item" href="/">
                            About
                        </a>

                        <a className="navbar-item" href="/instructions">
                            Instructions
                        </a>

                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link">
                                Members
                            </a>

                            <div className="navbar-dropdown">
                                <a className="navbar-item" href="/home">
                                    Home
                                </a>
                                <a className="navbar-item" href="/managelist">
                                    Manage Concern List
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <button className="button is-link is-small">
                                    <Link to="/signup" className={location.pathname === "/signup" ? "nav-link active" : "nav-link"} style={{ color: "white" }}>
                                        SignUp
                                    </Link>
                                </button>
                                <button className="button is-small">
                                    <Link to="/login" className={location.pathname === "/login" ? "nav-link active" : "nav-link"} style={{ color: "white" }}>
                                        Login
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;