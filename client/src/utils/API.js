import axios from "axios";

// Express needs this header on the response body of put/post routes to parse correctly
axios.defaults.headers.put['Content-Type'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.get['authorization'] = localStorage.getItem('jwt');

export default {
    updateLastCheck: (concernId) => {
        var moment = require('moment');
        return axios.put("/concerns/" + concernId, {
            last_check: moment().format("ddd, MMM Do YYYY, h:mm:ss a")
            })
    },

    displayConcerns: () => {
        return axios.get("/concerns");
    },

    createConcern: (value) => {
        return axios.post("/concerns", {name: value})
    },

    createUser: (newUser) => {
        return axios.post("/signup", newUser)
    },

    loginUser: (member) => {
        const loginPromise = axios.post("/api/login", member);
        loginPromise.then(({body}) => {
            localStorage.setItem('jwt', body.jwt);
            axios.defaults.headers.get['authorization'] = localStorage.getItem('jwt');
        });
        return loginPromise;
    },

    displayUsername: () => {
        return axios.get("/user");
    },
};