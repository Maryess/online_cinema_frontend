import { axiosDefault } from "api/interceprots";
import { IUserEditInput } from "components/screens/admin/users/UserEdit/user-edit.interface";
import { getUserUrl } from "config/api.config";
import { IMovie } from "shared/types/movie.types";
import { IUser } from "shared/types/user.types";

export const UserService = {
    async getById(id:string){
        return axiosDefault.get<IUser>(getUserUrl(`/${id}`))
    } ,
    async getFavoritesMovies (id:string) {
        return axiosDefault.get<IMovie[]>(getUserUrl(`/favorites/${id}`))
    },
    async getAll (){
        return axiosDefault.get<IUser[]>(getUserUrl(''))
    },
    async update(id:string, data:IUserEditInput){
        return axiosDefault.put<string>(getUserUrl(`/${id}`), data)
    },
    async deleteUserById(userId:string){
        return  axiosDefault.delete<string>(getUserUrl(`/${userId}`))
    }
}