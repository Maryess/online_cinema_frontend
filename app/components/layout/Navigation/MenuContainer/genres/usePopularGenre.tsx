import { useQuery } from "react-query"
import { GenreService } from "service/GenreService"


export const usePopularGenre = () => {
    const queryData = useQuery('popular genre menu', ()=>{
        GenreService.getPopularGenre()
    })

    return queryData
}