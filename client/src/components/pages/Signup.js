import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import API from "../../utils/API";
import Navbar from "../Navbar";

function Signup() {

    const [newUsername, setNewUsername] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newEmail, setNewEmail] = useState("");

    const history = useHistory();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        // alert(`Submitting username= ${newUsername}, password= ${newPassword}, email= ${newEmail}`)

        const newUser = {
            username: newUsername,
            password: newPassword,
            email: newEmail
        };

        API.createUser(newUser)
            .then(response => {
            console.log(response);
            if (response.status = "200") {
                console.log("signup succeeded");
                history.push('/login');
            }
        });
    }

    return (
        <div>
            <Navbar />
            <div className="field is-grouped is-grouped-centered" style={{marginTop: "50px" }}>
                <h1 className="title" style={{ fontFamily: "'Kalam', cursive" }}>
                    Signup
                </h1>
            </div>
            <br />
            <div className="box" style={{ margin: "25px 50px" }}>
                <div className="field">
                    <label className="label">Create Username</label>
                    <p className="control has-icons-left has-icons-right">
                        <input
                            className="input"
                            type="username"
                            value={newUsername}
                            onChange={e => setNewUsername(e.target.value)}
                        />
                    </p>
                </div>
                <div className="field">
                    <label className="label">Create Password:</label>
                    <p className="control has-icons-left">
                        <input
                            className="input"
                            type="password"
                            value={newPassword}
                            onChange={e => setNewPassword(e.target.value)}
                        />
                        <span className="icon is-small is-left">
                            <i className="fas fa-lock"></i>
                        </span>
                    </p>
                </div>
                <div className="field">
                    <label className="label">Email</label>
                    <p className="control has-icons-left has-icons-right">
                        <input
                            className="input"
                            type="email"
                            value={newEmail}
                            onChange={e => setNewEmail(e.target.value)}
                        />
                        <span className="icon is-small is-left">
                            <i className="fas fa-envelope"></i>
                        </span>
                    </p>
                </div>
                <div className="column">
                    <button className="button is-link" onClick={handleSubmit}>Signup</button>
                </div>
            </div>
        </div>
    );
}

export default Signup;