const axios = require("axios");

const domain = "http://localhost:3005";
const apiVersion = "/api/v1";
const baseURL = `${domain}${apiVersion}`;

const axiosInstance = axios.create({
    baseURL
})

export { axiosInstance };
