import { AxiosInstance } from "api/axiosInstance"
import { getMovieUrl } from "config/api.config"
import { IMovie } from "shared/types/movie.types"

export const MovieService ={
    async getAll (searchTerm?:string){
       return AxiosInstance.get<IMovie[]>(getMovieUrl(''),{
        params:searchTerm?{
            searchTerm
        }:
        {}
       })
    }
}