import { axiosDefault } from "api/interceprots";
import { IGenreEditInput } from "components/screens/admin/genres/GenreEdit/genre-edit.interface";
import { getGenreUrl } from "config/api.config";
import { IGenre } from "shared/types/movie.types";

export const GenreService = {
    async getAll(){
        return axiosDefault.get<IGenre[]>(getGenreUrl(''))
    },
    async getById(genreId:string){
        return axiosDefault.get<IGenreEditInput>(getGenreUrl(`/${genreId}`))
    },
    async updateGenre(genreId:string, data:IGenreEditInput){
        return axiosDefault.put<string>(getGenreUrl(`/${genreId}`), data)
    },
    async deleteGenreById(genreId:string){
        return axiosDefault.delete<string>(getGenreUrl(`/${genreId}`))
    } 
}