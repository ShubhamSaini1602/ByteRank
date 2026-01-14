// axiosClient.js
import axios from "axios";

// IF we are on our laptop, this becomes "http://localhost:3000"
// IF we are on Vercel, this becomes empty "", letting Vercel handle the routing.
const baseURL = import.meta.env.VITE_API_BASE_URL || "";

const axiosClient = axios.create({
    // URL where your backend/server is hosted
    baseURL: baseURL,
    // This tells the browser to automatically attach any stored cookies with 
    // every request made to the server.
    withCredentials: true,
    // This tells the server that the data you are sending is in JSON format.
    headers: {
        "Content-Type": "application/json"
    }
});

export default axiosClient;