import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import API from "../../utils/API";
import Concern from "../Concern";
import DeleteBtn from "../../components/DeleteBtn";
import Navbar from "../Navbar";

function ManageList() {
    const history = useHistory();
    const [newConcern, setNewConcern] = useState("");
    const [concerns, setConcerns] = useState([]);

    const handleAdd = (evt) => {
        evt.preventDefault();
        API.createConcern(newConcern);
        window.location.reload(true);
    }

    function deleteOldConcern(id) {
        console.log(id);
        API.deleteConcern(id);
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
                <div className="field has-addons">
                    <div className="control">
                        <input 
                            className="input" 
                            type="text" 
                            value={newConcern}
                            onChange={e => setNewConcern(e.target.value)}
                            placeholder="Add a Concern" />
                    </div>
                    <div className="control">
                        <button className="button is-info" onClick={handleAdd}>
                            Add
                        </button>
                    </div>
                </div>
            </div>
            <div className="field is-grouped is-grouped-centered">
                <div className="box">
                    <ul>
                        {concerns.map(concern => (
                            <Concern>
                                <a href={"/concernqrcode/" + concern.name + "/" + concern._id}>QR Code  </a>
                                <strong>{concern.name}</strong>:    {concern.last_check}    
                                <DeleteBtn onClick={() => deleteOldConcern(concern._id)} />   
                            </Concern>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ManageList;