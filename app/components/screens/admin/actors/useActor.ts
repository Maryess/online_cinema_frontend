import { IAdminTableItem, ITableItem } from "components/ui/admin-table/admin-table.interface"
import { getActorUrl, getAdminUrl, getMovieUrl } from "config/api.config"
import { useDebounce } from "hooks/useDebounce"
import { ChangeEvent, useCallback, useMemo, useState } from "react"
import { useMutation, useQuery } from "react-query"
import { toastr } from "react-redux-toastr"
import { ActorService } from "services/ActorService"
import { MovieService } from "services/MovieService"
import { UserService } from "services/UserService"

export const useActor=() => {
    const [searchTerm, setSearchTerm] = useState<string>('')
    const debouncedSearchTerm = useDebounce(searchTerm, 500)

    const queryData = useQuery(['actor list',debouncedSearchTerm], ()=>
                 ActorService.getAll(debouncedSearchTerm),{
                     select: ({data}) => data.map((actor):IAdminTableItem => 
                        ({
                            id:actor.id,
                            editUrl:getAdminUrl(`/actor/edit/${actor.id}`),
                            items: [actor.name, actor.country, String(actor.year)]
                }))
    })

    const handleSearch = useCallback((event:ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value)
    }, [])

    const {mutateAsync:deleteAsync} = useMutation('delete actor',(actorId:string)=>(ActorService.deleteActorById(actorId)
    ), {
        onSuccess: ()=>{
            toastr.success('Actor delete', 'Actor deleted')
            queryData.refetch()
        },
        onError: ()=>{
            toastr.error('Actor delete', 'Actor dont deleted')
        }
    })

      const {mutateAsync:createAsync} = useMutation('create actor', () => 
            ActorService.create(),{
                onSuccess({data:id}){
                    toastr.success('Create actor', 'Create successfully')
                    queryData.refetch()
                },
                onError(error) {
                    toastr.error(`${error}`, 'Create actor')
                }
            }
            )


    return useMemo(()=>({ 
        ...queryData,
        deleteAsync,
        createAsync,
        handleSearch,
        searchTerm
    }), [queryData, deleteAsync,createAsync,handleSearch,searchTerm])
}