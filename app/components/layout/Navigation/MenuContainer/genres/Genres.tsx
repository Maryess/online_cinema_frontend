import { useQuery } from "react-query"
import { useGetGenres } from "./useGetGenres"
import { DiVim } from "react-icons/di"
import Menu from "../Menu"

const Genres = () => {
    const {isLoading, data} = useGetGenres()


  return isLoading?<div>Loading...</div>:
        <div>
            <Menu menu={{
                title:'Popular genres',
                item: data || []
            }}/>
        </div>
}

export default Genres