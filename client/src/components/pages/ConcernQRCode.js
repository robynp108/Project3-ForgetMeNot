// import "./project3.css";

var React = require('react');
var QRCode = require('qrcode.react');

function ConcernQRCode(props) {
    console.log(props);
    const concernName = props.match.params.name;

    return (
        <div className="field is-grouped is-grouped-centered">
            <p class="title is-2 is-spaced">{concernName}</p>
            <br />
            <div className="box">
                <QRCode value="https://www.google.com" />
            </div>
        </div>
    );
}

export default ConcernQRCode;

// React.render(
//   <QRCode value="http://facebook.github.io/react/" />,
//   mountNode
// );

// return (
//     <li><a href={"https://forget-me-not-project-3.herokuapp.com/qrcode" + props.id} target="_blank">QR Code</a>{props.name}, {props.last_check}</li>
// );