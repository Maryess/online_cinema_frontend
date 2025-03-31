import { IAdminTableItem, ITableItem } from "components/ui/admin-table/admin-table.interface"
import { getAdminUrl, getMovieUrl } from "config/api.config"
import { useDebounce } from "hooks/useDebounce"
import { ChangeEvent, EventHandler, useMemo, useState } from "react"
import { useMutation, useQuery } from "react-query"
import { toastr } from "react-redux-toastr"
import { MovieService } from "services/MovieService"

export const useMovie=() => {
    const [searchTerm, setSearchTerm] = useState<string>('')
    const debouncedSearchTerm = useDebounce(searchTerm, 500)

    const queryData = useQuery(['movie list',debouncedSearchTerm], ()=>
                 MovieService.getAll(debouncedSearchTerm),{
                     select: ({data}) => data.map((movie):IAdminTableItem => 
                        ({
                            id:movie.id,
                            editUrl:getAdminUrl(`/movie/edit/${movie.id}`),
                            items: [movie.name, movie.country, movie.slug]
                }))
    })

    const handleSearch = (event:ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

    const {mutateAsync:createAsync} = useMutation('create movie', ()=> 
    MovieService.create(),{
        onSuccess:()=>{
            toastr.success('movie create', 'Movie created')
            queryData.refetch()
        },
        onError:()=>{
            toastr.error('movie created', 'Completed with error')
        }
    }
    )

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
        deleteAsync,
        createAsync,
        handleSearch,
        searchTerm
    }), [queryData, deleteAsync, createAsync, handleSearch, searchTerm])
}