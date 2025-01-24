import axios from "axios";
import { SERVER_URL } from "config/api.config";


export const AxiosInstance = axios.create({
    baseURL:SERVER_URL,
    headers:{
        "Content-Type":"application/json"
    }
})

