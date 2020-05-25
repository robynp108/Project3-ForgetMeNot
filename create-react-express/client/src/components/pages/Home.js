import React from "react";
import "./project3.css";

function Home() {
  return (
    <div>
      <div className="field is-grouped is-grouped-centered">
            <h1 className="title">
                Forget Me Not
            </h1>
        </div>
        <br/>
        <div className="field is-grouped is-grouped-centered">
            <div className="box">  
                <ul>
                    <li>Door Locked 0:00 </li>
                    <li>Stove Turned Off 0:00</li>
                    <li>Cats Fed 0:00</li>
                </ul> 
            </div>
        </div>
        <br/>
        <div className = "container">
            <div className="field is-grouped is-grouped-centered">
                <div> <button className="button">Login</button></div>
                
                <div><button className="button is-link">Signup</button></div>
            </div>
        </div>
    </div>
  );
}

export default Home;