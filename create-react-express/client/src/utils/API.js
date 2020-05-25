import axios from "axios";

axios.defaults.headers.put['Content-Type'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';


export default {
    updateLastCheck: () => {
        const concernId = props.match.params.id;
        return axios.put("/concerns/concernId", {
            last_check: "Mon May 25 3:55:00pm"
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
};