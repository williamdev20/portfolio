import axios from "axios";

const apiUrl = "http://127.0.0.1:8000";

const api = axios.create({
    baseURL: apiUrl
});

export default api;