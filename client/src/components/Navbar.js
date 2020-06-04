import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation();

    return (
        <div>
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <a class="navbar-item" href="/" style={{ fontFamily: "'Kalam', cursive", fontSize: "x-large"}}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_D2VOsb10Hq33rXLuX-8v80RRsix6WkMGEiwTtv_hxmaMC4nF&usqp=CAU" width="80px" height="50px" />
                        ForgetMeNot
                    </a>

                    {/* <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a> */}
                </div>

                <div id="navbarBasicExample" class="navbar-menu is-active">
                    <div class="navbar-start">
                        <a class="navbar-item" href="/">
                            About
                        </a>

                        <a class="navbar-item" href="/instructions">
                            Instructions
                        </a>

                        <div class="navbar-item has-dropdown is-hoverable">
                            <a class="navbar-link">
                                Members
                            </a>

                            <div class="navbar-dropdown">
                                <a class="navbar-item" href="/home">
                                    Home
                                </a>
                                <a class="navbar-item" href="/managelist">
                                    Manage Concern List
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="navbar-end">
                        <div class="navbar-item">
                            <div class="buttons">
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