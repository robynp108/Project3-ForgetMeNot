import { Link, useLocation } from "react-router-dom";

var React = require('react');
var QRCode = require('qrcode.react');

function ConcernQRCode(props) {
    console.log(props);
    const concernName = props.match.params.name;
    const concernId = props.match.params.id;

    const protocol = window.location.protocol;
    const hostname = window.location.hostname;
    const port = window.location.port;

    const location = useLocation();

    return (
        <div class="columns">
            <div class="column" style={{marginLeft: "100px", marginTop: "100px"}}>
                <p class="title is-2 is-spaced">{concernName}</p>
            </div>
            <div class="column is-2 is v-centered" style={{marginLeft: "100px", marginTop: "100px"}}>
                {/* <div className="box" style={{marginLeft: "20px"}}>
                    <QRCode value={protocol + "//" + hostname + ":" + port + "/landingpage/" + concernId} />
                </div> */}
                <div className="box" style={{marginLeft: "20px"}}>
                    <QRCode value={"landingpage/" + concernId} />
                </div>
                <br />
                <div className="field is-grouped is-grouped-centered">
                <button className="button is-hsl(271, 100%">
                  <Link to="/home" className={location.pathname === "/home" ? "nav-link active" : "nav-link"} style={{color: "white"}}>
                      Home
                  </Link>
                </button>
            </div>
            </div>
            <div class="column"></div>
            <div class="column"></div>
        </div>
    );
}

export default ConcernQRCode;