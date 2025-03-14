import { ISlide } from "components/ui/slider/slider.interface"
import { getMovieUrl } from "config/api.config"
import { useQuery } from "react-query"
import { MovieService } from "services/MovieService"
import { UserService } from "services/UserService"

export const useMovieApi=() => {
 const queryData = useQuery('best actors', ()=>
                 MovieService.getAll(),{
                     select: ({data}) => data.map((movie => ({
                                     link:getMovieUrl(movie.slug),
                                     subTitle:'fdfd'
                                 } as ISlide) ))
            })
    
        return queryData
    
}