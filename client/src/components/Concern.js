import React from "react";

function Concern(props) {

    return (
        <li><a href={"/concernqrcode/" + props.name + "/" + props.id} target="_blank">QR Code</a>{props.name}, {props.last_check}</li>
    );
}

export default Concern;