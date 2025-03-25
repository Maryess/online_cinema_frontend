import { SubmitHandler, UseFormSetValue } from "react-hook-form"
import { useMutation, useQuery } from "react-query"
import { IGenreEditInput } from "./genre-edit.interface"
import { useRouter } from "next/router"
import { GenreService } from "services/GenreService"
import { toastr } from "react-redux-toastr"
import { getAdminUrl } from "config/api.config"

export const useGenreEdit = (setValue:UseFormSetValue<IGenreEditInput>) => {

    const {push,query} = useRouter()

    const genreId = String(query.id)

    const {isLoading} = useQuery(['get genre', genreId], ()=>
    GenreService.getById(genreId),
    {
        onSuccess({data}) {
            setValue('name' , data.name)
            setValue('slug', data.slug)
            // toastr.success('Genre', 'Get genre')
        },
        onError(error) {
            toastr.error(`${error}`, 'Get genre')
        },
        enabled: !!query.id
    }
    )

    const {mutateAsync:updateAsync} = useMutation('update genre', (data:IGenreEditInput)=>
    GenreService.updateGenre(genreId, data),{
        onSuccess(){
            toastr.success('Update genre', 'Update successfully')
            push(getAdminUrl(`/genres`))
        },
        onError(error) {
            toastr.error(`${error}`, 'Get genre')
        }
    }
    )

    const onSubmit:SubmitHandler<IGenreEditInput> = async (data) =>{
        await updateAsync(data)
    }

    return {isLoading, onSubmit}
}