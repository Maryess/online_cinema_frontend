import { AxiosInstance } from "api/axiosInstance";
import { IAuth } from "components/screens/auth/auth.interface";
import { getAuthUrl } from "config/api.config";
import { register } from "module";
import { useMutation } from "react-query";
import { IUser } from "shared/types/movie.types";

export const AuthService = {
 

    async register ({email, password}:IAuth) {
        return AxiosInstance.post(`${getAuthUrl('/sign-up')}`,{email,password})
    },

    async auth ({email,password}:IAuth){
        return AxiosInstance.post(`${getAuthUrl('/sign-in')}`,{email,password})
    }
}