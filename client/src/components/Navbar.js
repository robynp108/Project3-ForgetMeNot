import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation();

    document.addEventListener('DOMContentLoaded', () => {

        // Get all "navbar-burger" elements
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
      
        // Check if there are any navbar burgers
        if ($navbarBurgers.length > 0) {
      
          // Add a click event on each of them
          $navbarBurgers.forEach( el => {
            el.addEventListener('click', () => {
      
              // Get the target from the "data-target" attribute
              const target = el.dataset.target;
              const $target = document.getElementById(target);
      
              // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
              el.classList.toggle('is-active');
              $target.classList.toggle('is-active');
      
            });
          });
        }
      
      });

    return (
        <div>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/" style={{ fontFamily: "'Kalam', cursive", fontSize: "x-large"}}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_D2VOsb10Hq33rXLuX-8v80RRsix6WkMGEiwTtv_hxmaMC4nF&usqp=CAU" alt="small blue flower" width="80px" height="50px" />
                        ForgetMeNot
                    </a>

                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
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
                                {/* <a className="navbar-item" href="/qrscanner">
                                    QR Scanner
                                </a> */}
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