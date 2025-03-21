import { axiosDefault } from "api/interceprots";
import { getGenreUrl } from "config/api.config";
import { IGenre } from "shared/types/movie.types";

export const GenreService = {
    async getAll(){
        return axiosDefault.get<IGenre[]>(getGenreUrl(''))
    } 
}