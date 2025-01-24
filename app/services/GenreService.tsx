import { AxiosInstance } from "api/axiosInstance";
import { getGenreUrl } from "config/api.config";
import { IGenre } from "shared/types/movie.types";

export const GenreService = {
    async getAll(){
        return AxiosInstance.get<IGenre[]>(getGenreUrl(''))
    } 
}