import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import API from "../../utils/API";
import Concern from "../Concern";
import Navbar from "../Navbar";


function Home() {
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
            <Navbar />
            <div className="field is-grouped is-grouped-centered" style={{marginTop: "50px" }}>
                <p style={{ fontFamily: "'Kalam', cursive", fontSize: "x-large" }}>Welcome {username}!</p>
            </div>
            <br />
            <div className="field is-grouped is-grouped-centered">
                <div className="box">
                    <ul>
                        {concerns.map(concern => (
                            <Concern>
                                <strong>{concern.name}</strong>:    {concern.last_check}
                            </Concern>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Home;