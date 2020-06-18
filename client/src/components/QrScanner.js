import React from 'react';
// import React, { Component } from 'react';
import QrReader from 'react-qr-scanner';
import { useHistory } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

function QrScanner() {
    const history = useHistory();
    const location = useLocation();

    const handleScan = (data) => {
        //console.log(data);
        if (data) {
            history.push("/" + data);
        }
    }

    const handleError = (err) => {
        console.error(err)
    }

    return (
        <div>
            {/* <Navbar /> */}
            <div className="field is-grouped is-grouped-centered" style={{ marginTop: "50px" }}>
                <p style={{ fontFamily: "'Kalam', cursive", fontSize: "x-large" }}>Ready to scan!</p>
            </div>
            <br />
            <div className="field is-grouped is-grouped-centered">
                <div className="box" style={{maxWidth: "400px", maxHeight: "400px"}}>
                    <QrReader
                        delay={100}
                        onError={handleError}
                        onScan={handleScan}
                    />
                </div>
            </div>
            <div className="field is-grouped is-grouped-centered">
          <button className="button is-hsl(271, 100%">
            <Link to="/home" className={location.pathname === "/home" ? "nav-link active" : "nav-link"} style={{ color: "white" }}>
              Home
            </Link>
          </button>
        </div>
        </div>
    );
}

// class QrScanner extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       delay: 100,
//       result: 'No result',
//     }

//     this.handleScan = this.handleScan.bind(this)
//   }
//   handleScan(data){
//     this.setState({
//       result: data,
//     })
//   }
//   handleError(err){
//     console.error(err)
//   }
//   render(){
//     const previewStyle = {
//       height: 240,
//       width: 320,
//     }

//     return(
//       <div>
//         <QrReader
//           delay={this.state.delay}
//           style={previewStyle}
//   onError={this.handleError}
//   onScan={this.handleScan}
//           />
//         <p>{this.state.result}</p>
//       </div>
//     )
//   }
// }

export default QrScanner;