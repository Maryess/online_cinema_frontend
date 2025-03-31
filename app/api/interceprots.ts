import axios from "axios";
import { SERVER_URL } from "config/api.config";
import { errorCatch, getContentType } from "./api.helpers";
import Cookies from "js-cookie"
import { AuthService } from "services/auth/AuthService";
import { removeTokensStorage } from "services/auth/auth.helper";

export const instance = axios.create({
    baseURL: SERVER_URL,
    headers: getContentType()
})

instance.interceptors.request.use((config)=>{
    const accessToken = Cookies.get("accessToken")

    if(config.headers && accessToken){
        config.headers.Authorization = `Bearer ${accessToken}`
    }

    return config
})

instance.interceptors.response.use((config)=> config, 
async error => {
    const originalRequest = error.config

    if((error.response.status === 401 || errorCatch(error) === 'jwt expired' || errorCatch(error) === 'jwt must be provided') && error.config && !error.config.isRetry){
        originalRequest._isRetry = true
        try{
            await AuthService.getNewTokens()
            return instance.request(originalRequest)
        }catch(error){
            if(errorCatch(error) === 'jwt expired') removeTokensStorage()
        }
    }
    throw error
})

export default instance

export const axiosDefault = axios.create({
	baseURL: SERVER_URL,
	headers: {
		'Content-Type': 'application/json',
	},
})