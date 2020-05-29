import React, { useState } from "react";
import API from "../../utils/API";
import "./project3.css";

function Signup() {

    const [newUsername, setNewUsername] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newEmail, setNewEmail] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        // alert(`Submitting username= ${newUsername}, password= ${newPassword}, email= ${newEmail}`)

        const newUser = {
            username: newUsername,
            password: newPassword,
            email: newEmail
        };

        API.createUser(newUser);
        // window.location.reload(true);
    }

    return (
        <div className="hero">
            <div className="hero-body">
                <h1 className="title has-text-centered is-size-2">Signup</h1>
                <div className="box is-vcentered">
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
        </div>
    );
}

export default Signup;