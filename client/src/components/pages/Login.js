import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import API from "../../utils/API";

function Login() {

    const [memberUsername, setMemberUsername] = useState("");
    const [memberPassword, setMemberPassword] = useState("");
    const history = useHistory();
    // const [redirect,...]
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
            // redirect screenshot with hook instead of state
        } else {

        }
    });
}

return (
    <div className="hero">
        <div className="hero-body">
            <h1 className="title has-text-centered is-size-2">Login</h1>
            <div className="box is-vcentered" style={{width: "50%", marginLeft: "300px"}}>
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
                    <button className="button is-link" onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    </div>
);
}

export default Login;