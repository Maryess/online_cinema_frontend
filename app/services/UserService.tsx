import { axiosDefault } from "api/interceprots";
import { getUserUrl } from "config/api.config";
import { IMovie } from "shared/types/movie.types";
import { IUser } from "shared/types/user.types";

export const UserService = {
    async getUser(id:string){
        return axiosDefault.get<IUser>(getUserUrl(id))
    } ,
    async getFavoritesMovies (id:string) {
        return axiosDefault.get<IMovie[]>(getUserUrl(`/favorites/${id}`))
    }
}