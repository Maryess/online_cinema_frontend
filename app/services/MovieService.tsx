import { axiosDefault } from "api/interceprots"
import { IMovieEditInput } from "components/screens/admin/movies/MovieEdit/movie-edit.interface"
import { getMovieUrl } from "config/api.config"
import { IMovie } from "shared/types/movie.types"

export const MovieService = {

    async create(){
        return axiosDefault.post<string>(getMovieUrl(''),{ 
        })
    },

    async getAllSearch (searchTerm?:string){
       return axiosDefault.get<IMovie[]>(getMovieUrl(''),{
        params:searchTerm?{
            searchTerm
        }:
        {

        }
       })
    },

   async update(movieId:string, data:IMovieEditInput){
           return axiosDefault.put<string>(getMovieUrl(`/${movieId}`), data)
       },

    async deleteMovieById(movieId:string){
        return axiosDefault.delete<string>(getMovieUrl(`/${movieId}`))
    },

    async getById(movieId:string){   
        return axiosDefault.get<IMovieEditInput>(getMovieUrl(`/${movieId}`))
    },

    async getBySlug(slug:string){
        return axiosDefault.get<IMovie>(getMovieUrl(`/${slug}`))
    },

    async getAll(searchTerm?: string) {
		return axiosDefault.get<IMovie[]>(getMovieUrl(``), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	}
}