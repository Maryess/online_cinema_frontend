import axios from "axios";
import { getAuthUrl, SERVER_URL } from "config/api.config";

export const AuthService = {
 
    async register (email:string,password:string) {
       const response = await axios.post(`${SERVER_URL}${getAuthUrl('/sign-up')}`,
			{
				email,
				password,
			})

        return response
    },

    async auth (email:string,password:string){
        const response = await axios.post(`${SERVER_URL}${getAuthUrl('/sign-in')}`,
        {
            email,
            password,
        })

        return response
    }
}