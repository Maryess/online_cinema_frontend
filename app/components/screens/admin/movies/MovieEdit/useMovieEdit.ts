import { SubmitHandler, UseFormSetValue } from "react-hook-form"
import { useMutation, useQuery } from "react-query"
import { useRouter } from "next/router"
import { toastr } from "react-redux-toastr"
import { getAdminUrl } from "config/api.config"
import { MovieService } from "services/MovieService"
import { IMovieEditInput } from "./movie-edit.interface"

export const useMovieEdit = (setValue:UseFormSetValue<IMovieEditInput>) => {

    const {push,query} = useRouter()

    const movieId = String(query.id)

    const {isLoading} = useQuery(['get movie', movieId], ()=>
    MovieService.getById(movieId),
    {
        onSuccess({data}) {
            if(data){
            setValue('name' , data.name)
            setValue('slug', data.slug)
            setValue('country', data.country)
            setValue('duration', data.duration)
            setValue('year', data.year)
            setValue('genres', data.genres)
            setValue('actors', data.actors)}
        },
        onError(error) {
            toastr.error(`${error}`, 'Get movie')
        },
        enabled: !!query.id
    }
    )

    const {mutateAsync:updateAsync} = useMutation('update movie', (data:IMovieEditInput)=>
    MovieService.update(movieId, data),{
        onSuccess(){
            toastr.success('Update movie', 'Update successfully')
            push(getAdminUrl(`/movies`))
        },
        onError(error) {
            toastr.error(`${error}`, 'Update movie')
        }
    }
    )

    const onSubmit:SubmitHandler<IMovieEditInput> = async (data) =>{
        await updateAsync(data)
    }

    return {isLoading, onSubmit}
}