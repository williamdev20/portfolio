import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

const api = axios.create({
    baseURL: apiUrl,
    timeout: 30000
});

export default api;