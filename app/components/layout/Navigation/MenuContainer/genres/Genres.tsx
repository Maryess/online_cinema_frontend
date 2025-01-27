import { useQuery } from "react-query"
import { useGetGenres } from "./useGetGenres"
import { DiVim } from "react-icons/di"
import Menu from "../Menu"
import Skeleton from "react-loading-skeleton"
import SkeletonLoader from "components/ui/SkeletonLoader"

const Genres = () => {
    const {isLoading, data} = useGetGenres()


  return isLoading? <div className="mx-6 mb-6"> <SkeletonLoader count={5} className="h-7 mt-6"/></div> :
        <div>
            <Menu menu={{
                title:'Popular genres',
                item: data || []
            }}/>
        </div>
}

export default Genres