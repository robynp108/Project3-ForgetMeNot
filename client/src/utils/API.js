import axios from "axios";


axios.defaults.headers.put['Content-Type'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';


export default {
    updateLastCheck: (concernId) => {
        var moment = require('moment');
        return axios.put("/concerns/" + concernId, {
            last_check: moment().format("ddd, MMM Do YYYY, h:mm:ss a")
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    },

    displayConcerns: () => {
        return axios.get("/concerns")
        .then(function (response) {
            console.log(response);
            return response;
        })
        .catch(function (error) {
            console.log(error);
        });
    },

    createConcern: (value) => {
        return axios.post("/concerns", {name: value})
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    },

    createUser: (newUser) => {
        return axios.post("/signup", newUser)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    },

    loginUser: (member) => {
        return axios.post("/api/login", member)
        // .then(function (response) {
        //     console.log(response);
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });
    }
};