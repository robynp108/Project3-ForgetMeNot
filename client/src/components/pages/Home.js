import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import API from "../../utils/API";
import Concern from "../Concern";
import Form from "../Form";


function Home() {
    const location = useLocation();

    const [concerns, setConcerns] = useState([]);


    useEffect(() => {
        API.displayConcerns().then((response) => {
            setConcerns(response.data);
        })
    }, []);

    return (
        <div>
            <div className="field is-grouped is-grouped-centered">
                <h1 className="title">
                    Forget Me Not
            </h1>
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
        </div>
    );
}

export default Home;