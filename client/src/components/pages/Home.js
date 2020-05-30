import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import API from "../../utils/API";
import Concern from "../Concern";
import Form from "../Form";


function Home() {
    const location = useLocation();
    const history = useHistory();
    const [concerns, setConcerns] = useState([]);
    const [username, setUsername] = useState("");


    useEffect(() => {
        API.displayConcerns().then((response) => {
            console.log(response);
            setConcerns(response.data);
        }).catch((error) => {
            console.log('error');
            history.push('/');
        });
    }, []);

    useEffect(() => {
        API.displayUsername().then((response) => {
            setUsername(response.data.username);
        });
    });

    return (
        <div>
            <div className="field is-grouped is-grouped-centered">
                <h1 className="title">
                    Forget Me Not
                </h1>
            </div>
            <br />
            <div className="field is-grouped is-grouped-centered">
                <p style={{ fontWeight: "bold", fontSize: "large" }}>Welcome {username}!</p>
            </div>
            <br />
            <div className="field is-grouped is-grouped-centered">
                <div className="box">
                    <ul>
                        {concerns.map(concern => (
                            <Concern
                                id={concern._id}
                                name={concern.name}
                                last_check={concern.last_check}
                            />
                        ))}
                    </ul>
                </div>
            </div>
            <br />
            <div className="columns is-mobile is-centered">
                <div className="column is-one-quarter">
                    <div>
                        <Form />
                    </div>
                </div>
            </div>
            <br />
            <div className="field is-grouped is-grouped-centered">
                <button className="button is-hsl(271, 100%">
                    <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"} style={{ color: "white" }}>
                        Front page/instructions
                    </Link>
                </button>
            </div>
        </div>
    );
}

export default Home;