import { axiosDefault } from "api/interceprots"
import { getMovieUrl } from "config/api.config"
import { IMovie } from "shared/types/movie.types"

export const MovieService = {
    async getAllSearch (searchTerm?:string){
       return axiosDefault.get<IMovie[]>(getMovieUrl(''),{
        params:searchTerm?{
            searchTerm
        }:
        {

        }
       })
    },

    async deleteMovieById(id:string){
        return axiosDefault.delete<string>(getMovieUrl(`/${id}`))
    },

    async getAll(searchTerm?: string) {
		return axiosDefault.get<IMovie[]>(getMovieUrl(``), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},

    async createMovie(name:string,duration:number,poster:string,bigPoster:string,videoUrl:string,country:string,year:number){
        const response = await axiosDefault.post('/movie',{
            name,
            duration,
            country,
            year,
            poster,
            bigPoster,
            videoUrl
        })

        return response
    }
}