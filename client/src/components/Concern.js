import React from "react";

function Concern(props) {

    return (
        <li>{props.name}, {props.last_check}</li>
    );
}

export default Concern;