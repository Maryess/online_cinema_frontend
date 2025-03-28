import { IAdminTableItem, ITableItem } from "components/ui/admin-table/admin-table.interface"
import { getMovieUrl } from "config/api.config"
import { useDebounce } from "hooks/useDebounce"
import { useMemo, useState } from "react"
import { useMutation, useQuery } from "react-query"
import { toastr } from "react-redux-toastr"
import { MovieService } from "services/MovieService"
import { UserService } from "services/UserService"

export const useUser=() => {
    const [searchTerm, setSearchTerm] = useState<string>('')
    const debounced = useDebounce(searchTerm, 500)

    const queryData = useQuery(['user list',debounced], ()=>
                 UserService.getAll(),{
                     select: ({data}) => data.map((user):IAdminTableItem => 
                        ({
                            id:user.id,
                            editUrl:getMovieUrl(`/edit/${user.id}`),
                            items: [user.email, String(user.isAdmin)]
                }))
    })
    const {mutateAsync:deleteAsync} = useMutation('delete user',(userId:string)=>(UserService.deleteUserById(userId)
    ), {
        onSuccess: ()=>{
            toastr.success('User delete', 'User deleted')
            queryData.refetch()
        },
        onError: ()=>{
            toastr.error('User delete', 'User dont deleted')
        }
    })



    return useMemo(()=>({ 
        ...queryData,
        deleteAsync
    }), [queryData, deleteAsync])
}