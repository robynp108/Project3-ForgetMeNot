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
                        <li style={{ fontFamily: "'Kalam', cursive" }}>SAMPLE CONCERN LIST</li>
                        <li>“QR Code” Oven off, Wed, May 27th 2020, 6:10:01 pm</li>
                        <li>“QR Code” Pantry closed, Wed, May 27th 2020, 10:54:25 am</li>
                        <li>“QR Code” Front door locked, Wed, May 27th 2020, 5:50:06 pm</li>
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