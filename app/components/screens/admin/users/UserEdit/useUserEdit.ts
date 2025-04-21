import { useRouter } from "next/router"
import { useMutation, useQuery } from "react-query"
import { UserService } from "services/UserService"
import { IUserEditInput } from "./user-edit.interface"
import { SubmitHandler, UseFormSetValue } from "react-hook-form"
import { toastr } from "react-redux-toastr"
import { getAdminUrl } from "config/api.config"

export const useUserEdit = (setValue:UseFormSetValue<IUserEditInput>) => {
        
        const {push,query} = useRouter()
    
        const userId = String(query.id)

        const {isLoading} = useQuery(['get user', userId], ()=>
        UserService.getById(userId),
        {
            onSuccess({data}) {
                if(data){
                setValue('email' , data.email)
                setValue('password', data.password)
            }
            },
            onError(error) {
                toastr.error(`${error}`, 'Get user')
            },
            enabled: !!query.id
        })
    
        const {mutateAsync:updateAsync} = useMutation('update user', (data:IUserEditInput)=>
        UserService.update(userId, data),{
            onSuccess(){
                toastr.success('Update user', 'Update successfully')
                push(getAdminUrl(`/users`))
            },
            onError(error) {
                toastr.error(`${error}`, 'Update user')
            }
        }
        )
    
        const onSubmit:SubmitHandler<IUserEditInput> = async (data) =>{
            await updateAsync(data)
        }
    
        return {isLoading, onSubmit}
}