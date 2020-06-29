import React from "react";
import Navbar from "../Navbar";


function Home() {

    return (
        <div>
            <Navbar />
            <div className="field is-grouped is-grouped-centered" style={{marginTop: "100px"}} >
                <div className="box" style={{width: "50%", marginLeft: "25px"}}>
                    <p>The worry over whether we remembered to do certain things can be a major life disruption.
                        ForgetMeNot can help you remember! By applying a QR code to each thing that causes you
                        concern, then scanning that code whenever you do the task, this app will record the time it
                        was done so you can confirm it anytime. A few easy steps can let you check what you’ve done
                        and relax. <strong>Go to the instructions page to see how it works, or signup and login to get started right away.</strong>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;