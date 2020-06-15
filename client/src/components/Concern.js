// import React from "react";

// function Concern(props) {

//     return (
//         <li><a href={"/concernqrcode/" + props.name + "/" + props.id}>QR Code  </a>{props.name}, {props.last_check}</li>
//     );
// }

// export default Concern;

import React from "react";

function Concern({ children }) {
  return <li className="list-group-item">{children}</li>;
}

export default Concern;
