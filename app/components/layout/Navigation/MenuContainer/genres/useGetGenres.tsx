import { useQuery } from "react-query"
import { GenreService } from "services/GenreService"
import { IMenuItem } from "../menu.interface"
import { getGenreUrl } from "config/api.config"


export const useGetGenres = () => {

    const queryData = useQuery('genres menu', ()=>
        GenreService.getAll(),{
            select: ({data}) => data.map((genre => ({
                icon:'Md12Mp',
                link:getGenreUrl(genre.slug),
                name:genre.name
            } as IMenuItem) )).splice(0, 4)
})

    return queryData
}