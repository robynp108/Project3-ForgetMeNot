import React from "react";
import Navbar from "../Navbar";


function Home() {

    return (
        <div>
            <Navbar />
            <div className="field is-grouped is-grouped-centered" style={{marginTop: "50px" }}>
                <div className="box" style={{ width: "50%", marginLeft: "25px" }}>
                    <ul>
                        <li style={{ fontFamily: "'Kalam', cursive" }}>INSTRUCTIONS</li>
                        <li>(You will need to be on a device connected to a printer for step 5.)</li>
                        <li>1. Sign up for an account, then login</li>
                        <li>2. Start creating your list of concerns! Navigate to the "manage list" page. Add your concerns with names like “Oven off” and “Took
                            morning meds”.</li>
                        <li>3. The concern will appear on the list with a link to a QR Code on the left and an "X" to delete if desired.</li>
                        <li>4. Click “QR Code” to see a page with that concern’s QR Code.</li>
                        <li>5. Print the code and tape it on or near the item of concern.</li>
                        <li>6. Whenever you do the task, just scan the code with any qr scanning app, then navigate to the url it finds and you’ll see a page telling you the scan was successful.</li>
                        <li>7. Return to your Home page and you will see the time recorded on
                            your concern list!</li>
                        <li>8. Leave a window open on the home page to quickly see your list anytime.</li>
                    </ul>
                </div>
            </div>
            <br />
            <div className="field is-grouped is-grouped-centered">
                <div className="box" style={{ width: "50%", marginLeft: "25px" }}>
                    <ul>
                        <li style={{ fontFamily: "'Kalam', cursive" }}>SAMPLE CONCERN LIST</li>
                        <li><strong>Oven off</strong>: Wed, May 27th 2020, 6:10:01 pm</li>
                        <li><strong>Took morning meds</strong>: Wed, May 27th 2020, 10:54:25 am</li>
                        <li><strong>Front door locked</strong>: Wed, May 27th 2020, 5:50:06 pm</li>
                    </ul>
                </div>
            </div>
            <br />
            <div className="field is-grouped is-grouped-centered" style={{marginBottom: "50px" }}>
                <h2 className="title" style={{ fontFamily: "'Kalam', cursive" }}>
                    Ready to start?  Go to Signup above!
                </h2>
            </div>
        </div>
    );
}

export default Home;