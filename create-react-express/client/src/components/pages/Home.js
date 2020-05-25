import React from "react";
import "./project3.css";

function Home() {
  return (
    <div>
      <div class="field is-grouped is-grouped-centered">
            <h1 class="title">
                Forget Me Not
            </h1>
        </div>
        <br/>
        <div class="field is-grouped is-grouped-centered">
            <div class="box">  
                <ul>
                    <li>Door Locked 0:00 </li>
                    <li>Stove Turned Off 0:00</li>
                    <li>Cats Fed 0:00</li>
                </ul> 
            </div>
        </div>
        <br/>
        <div class = "container">
            <div class="field is-grouped is-grouped-centered">
                <div> <button class="button">Login</button></div>
                
                <div><button class="button is-link">Signup</button></div>
            </div>
        </div>
    </div>
  );
}

export default Home;