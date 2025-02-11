import { getMovieUrl } from "config/api.config"
import { useQuery } from "react-query"
import { MovieService } from "services/MovieService"

export const useMovieApi = () =>{
     const queryData = useQuery('popular movie', ()=>
             MovieService.getAll(),{
                 select: ({data}) => data
        })

    return queryData
}