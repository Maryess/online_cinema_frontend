import { IAdminTableItem, ITableItem } from "components/ui/admin-table/admin-table.interface"
import { getMovieUrl } from "config/api.config"
import { useDebounce } from "hooks/useDebounce"
import { useMemo, useState } from "react"
import { useMutation, useQuery } from "react-query"
import { toastr } from "react-redux-toastr"
import { MovieService } from "services/MovieService"

export const useMovie=() => {
    const [searchTerm, setSearchTerm] = useState<string>('')
    const debounced = useDebounce(searchTerm, 500)

    const queryData = useQuery(['movie list',debounced], ()=>
                 MovieService.getAll(),{
                     select: ({data}) => data.map((movie):IAdminTableItem => 
                        ({
                            id:movie.id,
                            editUrl:getMovieUrl(`/edit/${movie.id}`),
                            items: [movie.name, movie.country, movie.slug]
                }))
    })
    const {mutateAsync:deleteAsync} = useMutation('delete movie',(movieId:string)=>(MovieService.deleteMovieById(movieId)
    ), {
        onSuccess: ()=>{
            toastr.success('movie delete', 'Movie deleted')
            queryData.refetch()
        },
        onError: ()=>{
            toastr.error('movie delete', 'Completed with error')
        }
    })



    return useMemo(()=>({ 
        ...queryData,
        deleteAsync
    }), [queryData, deleteAsync])
}