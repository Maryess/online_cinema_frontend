import { axiosDefault } from "api/interceprots";
import { getAuthUrl, SERVER_URL } from "config/api.config";
import { removeTokensStorage, saveToStorage } from "./auth.helper";
import Cookies from "js-cookie";
import { IAuthResponse } from "store/user/user.interface";
import { getContentType } from "api/api.helpers";

export const AuthService = {
 
    async register (email:string,password:string) {
       const response = await axiosDefault.post(`${SERVER_URL}${getAuthUrl('/sign-up')}`,
			{
				email,
				password,
			})

        if (response.data.accessToken)
            saveToStorage(response.data)

        return response
    },

    async auth (email:string,password:string){
        const response = await axiosDefault.post(`${SERVER_URL}${getAuthUrl('/sign-in')}`,
        {
            email,
            password,
        })

        if (response.data.accessToken)
            saveToStorage(response.data)

        return response
    },

    logout(){
        removeTokensStorage()
        localStorage.removeItem('user')
    },

    async getNewTokens(){
        const refreshToken = Cookies.get('refreshToken')
        const response = await axiosDefault.post<IAuthResponse>(getAuthUrl('/sign-in/access-token'),{refreshToken}, 
        {
            headers: getContentType()
        }
    )

    if (response.data.accessToken) saveToStorage(response.data)
    
        return response
    }

    
}