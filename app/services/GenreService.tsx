import axios from "axios";
import { getGenreUrl } from "config/api.config";
import { IGenre } from "shared/types/movie.types";

export const GenreService = {
    async getAll(){
        return axios.get<IGenre[]>(getGenreUrl('get all'))
    } 
}