var React = require('react');
var QRCode = require('qrcode.react');

function ConcernQRCode(props) {
    console.log(props);
    const concernName = props.match.params.name;
    const concernId = props.match.params.id;

    const protocol = window.location.protocol;
    const hostname = window.location.hostname;
    const port = window.location.port;

    return (
        <div class="columns">
            <div class="column">
                <p class="title is-2 is-spaced">{concernName}</p>
            </div>
            <div class="column is-2 is v-centered">
                <div className="box">
                    <QRCode value={protocol + "//" + hostname + ":" + port + "/landingpage/" + concernId} />
                </div>
            </div>
            <div class="column"></div>
            <div class="column"></div>
        </div>
    );
}

export default ConcernQRCode;