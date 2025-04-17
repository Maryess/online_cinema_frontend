import { IAdminTableItem } from "components/ui/admin-table/admin-table.interface"
import { getAdminUrl, getGenreUrl } from "config/api.config"
import { useDebounce } from "hooks/useDebounce"
import { useRouter } from "next/router"
import { ChangeEvent, useCallback, useMemo, useState } from "react"
import { useMutation, useQuery } from "react-query"
import { toastr } from "react-redux-toastr"
import { GenreService } from "services/GenreService"

export const useGenre=() => {
    const [searchTerm, setSearchTerm] = useState<string>('')
    const debouncedSearchTerm = useDebounce(searchTerm, 500)
    const {push} = useRouter()

    
	const queryData = useQuery(
		['genre list', debouncedSearchTerm],
		() => GenreService.getAll(debouncedSearchTerm),
		{
			select: ( {data}) =>
				data.map(
					(genre): IAdminTableItem => ({
						id: genre.id,
						editUrl: getAdminUrl(`/genre/edit/${genre.id}`),
						items: [genre.name, genre.slug],
					})
				),
			onError(error) {
				toastr.error(`${error}`, 'Genre list');
			},
		}
	);

	const handleSearch = useCallback((event: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	},[]);

    const {mutateAsync:createAsync} = useMutation('create genre', () => 
        GenreService.create(),{
            onSuccess({data:id}){
                toastr.success('Create genre', 'Create successfully')
                queryData.refetch()
            },
            onError(error) {
                toastr.error(`${error}`, 'Create genre')
            }
        }
        )

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
        deleteAsync,
        createAsync,
        handleSearch,
        searchTerm
    }), [queryData, deleteAsync,handleSearch,searchTerm, createAsync])
}