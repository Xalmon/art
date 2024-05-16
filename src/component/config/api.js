import axios from "axios"

// export const API_URL = "http://localhost:8080";

export const API_URL = "https://artxpressbackend.onrender.com"

export const api = axios.create({
    baseURL:  API_URL,
    headers:{
        "Content-Type": "application/json"
    }
})