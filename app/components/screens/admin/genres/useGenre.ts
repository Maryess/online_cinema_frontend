import { IAdminTableItem } from "components/ui/admin-table/admin-table.interface"
import { getGenreUrl } from "config/api.config"
import { useDebounce } from "hooks/useDebounce"
import { useMemo, useState } from "react"
import { useMutation, useQuery } from "react-query"
import { toastr } from "react-redux-toastr"
import { GenreService } from "services/GenreService"

export const useGenre=() => {
    const [searchTerm, setSearchTerm] = useState<string>('')
    const debounced = useDebounce(searchTerm, 500)

    const queryData = useQuery(['actor list',debounced], ()=>
                 GenreService.getAll(),{
                     select: ({data}) => data.map((genre):IAdminTableItem => 
                        ({
                            id:genre.id,
                            editUrl:getGenreUrl(`/edit/${genre.id}`),
                            items: [genre.name, genre.slug]
                }))
    })
    const {mutateAsync:deleteAsync} = useMutation('delete genre',(genreId:string)=>(GenreService.deleteGenreById(genreId)
    ), {
        onSuccess: ()=>{
            toastr.success('Genre delete', 'Genre deleted')
            queryData.refetch()
        },
        onError: ()=>{
            toastr.error('Genre delete', 'Genre dont deleted')
        }
    })



    return useMemo(()=>({ 
        ...queryData,
        deleteAsync
    }), [queryData, deleteAsync])
}