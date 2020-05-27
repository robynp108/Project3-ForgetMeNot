import React from "react";

function Concern(props) {

    return (
        <li><a href="https://www.qr-code-generator.com/" target="_blank">QR Code</a>{props.name}, {props.last_check}</li>
    );
}

export default Concern;