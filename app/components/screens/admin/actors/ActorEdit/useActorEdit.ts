import { SubmitHandler, UseFormSetValue } from "react-hook-form"
import { useMutation, useQuery } from "react-query"
import { useRouter } from "next/router"
import { GenreService } from "services/GenreService"
import { toastr } from "react-redux-toastr"
import { getAdminUrl } from "config/api.config"
import { IActorEditInput } from "./actor-edit.interface"
import { ActorService } from "services/ActorService"

export const useActorEdit = (setValue:UseFormSetValue<IActorEditInput>) => {

    const {push,query} = useRouter()

    const actorId = String(query.id)

    const {isLoading} = useQuery(['get actor', actorId], ()=>
    ActorService.getById(actorId),
    {
        onSuccess({data}) {
            setValue('name' , data.name)
            setValue('slug' , data.slug)
            setValue('year' , data.year)
            setValue('country' , data.country)
            setValue('photo', data.photo)
        },
        onError(error) {
            toastr.error(`${error}`, 'Get genre')
        },
        enabled: !!query.id
    }
    )

    const {mutateAsync:updateAsync} = useMutation('update genre', (data:IActorEditInput)=>
    ActorService.update(actorId, data),{
        onSuccess(){
            toastr.success('Update actor', 'Update successfully')
            push(getAdminUrl(`/actors`))
        },
        onError(error) {
            toastr.error(`${error}`, 'Get actor')
        }
    }
    )

    const onSubmit:SubmitHandler<IActorEditInput> = async (data) =>{
        await updateAsync(data)
    }

    return {isLoading, onSubmit}
}