import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import API from "../../utils/API";
import Concern from "../Concern";
import Navbar from "../Navbar";

function ManageList() {
    const history = useHistory();
    const [newConcern, setNewConcern] = useState("");
    const [concerns, setConcerns] = useState([]);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        // alert(`Submitting Name ${newConcern}`)
        API.createConcern(newConcern);
        window.location.reload(true);
    }

    useEffect(() => {
        API.displayConcerns().then((response) => {
            console.log(response);
            setConcerns(response.data);
        }).catch((error) => {
            console.log('error');
            history.push('/');
        });
    }, []);

    return (
        <div>
            <Navbar />
            <div className="field is-grouped is-grouped-centered" style={{marginTop: "50px" }}>
                <h1 className="title" style={{ fontFamily: "'Kalam', cursive" }}>
                    What would you like to do?
                </h1>
            </div>
            <div className="field is-grouped is-grouped-centered">
                <div class="field has-addons">
                    <div class="control">
                        <input 
                            class="input" 
                            type="text" 
                            value={newConcern}
                            onChange={e => setNewConcern(e.target.value)}
                            placeholder="Add a Concern" />
                    </div>
                    <div class="control">
                        <a class="button is-info" onClick={handleSubmit}>
                            Submit
                        </a>
                    </div>
                </div>
            </div>
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
        </div>
    )
}

export default ManageList;