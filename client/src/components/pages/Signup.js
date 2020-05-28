import React from "react";

function Signup() {

    return (
        <div className="hero">
            <div className="hero-body">
                <h1 className="title has-text-centered is-size-2">Signup</h1>
                <div className="box">
                    <div className="field">
                        <label className="label">Create Username</label>
                        <p className="control has-icons-left has-icons-right">
                            <input className="input" type="username" />
                            <span className="icon is-small is-left">
                            </span>
                        </p>
                    </div>
                    <div className="field">
                        <label className="label">Create Password:</label>
                        <p className="control has-icons-left">
                            <input className="input" type="password" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-lock"></i>
                            </span>
                        </p>
                    </div>
                    <div className="field">
                        <label className="label">Email</label>
                        <p className="control has-icons-left has-icons-right">
                            <input className="input" type="username" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope"></i>
                            </span>
                        </p>
                    </div>
                    <div className="button is-link">Signup
                </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;