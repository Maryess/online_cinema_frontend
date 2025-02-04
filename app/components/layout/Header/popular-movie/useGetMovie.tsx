import { error } from "console"
import { useQuery } from "react-query"
import { MovieService } from "services/MovieService"
import { IMovieItem } from "./movie.interface"

export const useGetMovie = () =>{
     const queryData = useQuery('search movies', ()=>
            MovieService.getAll(),{
                select: ({data}) => 
                    data.map((movie)=>({
                        poster:movie.poster,
                        name:movie.name,
                        genres: movie.genres
                    }as IMovieItem ))
                }
            )
    
            return queryData
}