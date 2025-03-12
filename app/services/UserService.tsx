import { AxiosInstance } from "api/axiosInstance";
import { getUserUrl } from "config/api.config";
import { IUser } from "shared/types/user.types";

export const UserService = {
    async getUser(id:string){
        return AxiosInstance.get<IUser>(getUserUrl(id))
    } 
}