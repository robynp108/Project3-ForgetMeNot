import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import API from "../../utils/API";
import Navbar from "../Navbar";

function Login() {

    const [memberUsername, setMemberUsername] = useState("");
    const [memberPassword, setMemberPassword] = useState("");

    const history = useHistory();
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        // alert(`Submitting username= ${memberUsername}, password= ${memberPassword}`)

        const member = {
            username: memberUsername,
            password: memberPassword,
        };

        API.loginUser(member)
            .then(response => {
                console.log(response);
                if (response.status = "200") {
                    console.log("auth succeeded");
                    history.push('/home');
                }
            });
    }

    return (
        <div>
            <Navbar />
            <div className="field is-grouped is-grouped-centered" style={{marginTop: "50px" }}>
                <h1 className="title" style={{ fontFamily: "'Kalam', cursive" }}>
                    Login
                </h1>
            </div>
            <br />
            <div className="box is-vcentered" style={{ margin: "25px 50px" }}>
                <div className="field">
                    <label className="label">Username</label>
                    <p className="control has-icons-left has-icons-right">
                        <input
                            className="input"
                            type="username"
                            value={memberUsername}
                            onChange={e => setMemberUsername(e.target.value)}
                        />
                    </p>
                </div>
                <div className="field">
                    <label className="label">Password:</label>
                    <p className="control has-icons-left">
                        <input
                            className="input"
                            type="password"
                            value={memberPassword}
                            onChange={e => setMemberPassword(e.target.value)}
                        />
                        <span className="icon is-small is-left">
                            <i className="fas fa-lock"></i>
                        </span>
                    </p>
                </div>
                <div className="column">
                    <button className="button" onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    );
}

export default Login;