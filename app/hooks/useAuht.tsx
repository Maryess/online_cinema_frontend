import { useMutation, useQuery } from "react-query"
import { GenreService } from "services/GenreService"
import { getGenreUrl } from "config/api.config"
import { IMenuItem } from "components/layout/Navigation/MenuContainer/menu.interface"
import { AuthService } from "services/AuthService"
import { IUser } from "shared/types/movie.types"
import { AxiosInstance } from "api/axiosInstance"
import { useGetFiledValue } from "./useGetFIiedValue"


export const useAuth = () => {

    const {email,password} = useGetFiledValue()

    const register =  useMutation(()=>AuthService.register({email:email,password:password}),{
            onSuccess:(data, variables, context)=> {
                console.log(data)
            },
        })
    

    const auth =  useMutation(()=>AuthService.auth({email:email,password:password}),{
            onSuccess:(data, variables, context)=> {
                console.log(data)
            },}
        )

    return {register,auth}
}