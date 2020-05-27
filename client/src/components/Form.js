import React, { useState } from "react";
import API from "../utils/API";

function Form() {

    const [newConcern, setNewConcern] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        // alert(`Submitting Name ${newConcern}`)
        API.createConcern(newConcern);
        window.location.reload(true);
    }

    return (
        <div className="field">
            <div className="control">
                <input 
                className="input" 
                type="text"
                value={newConcern}
                onChange={e => setNewConcern(e.target.value)} 
                placeholder="Add another concern" />
            </div>
            <div>
                <button className="button is-small is-success is-light" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
}

export default Form;