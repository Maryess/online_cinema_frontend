import Menu from "../Menu"
import SkeletonLoader from "components/ui/SkeletonLoader"
import { usePopularGenres } from "./usePopularGenres"

const Genres = () => {
    const {isLoading, data} = usePopularGenres()


  return isLoading? <div className="mx-6 mb-6"> <SkeletonLoader count={5} className="h-7 mt-6"/></div> :
        <div>
            <Menu menu={{
                title:'Popular genres',
                item: data || []
            }}/>
        </div>
}

export default Genres