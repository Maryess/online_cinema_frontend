import Menu from "../Menu"
import SkeletonLoader from "components/ui/SkeletonLoader"
import { useGenreApi } from "hooks/useGenreApi"

const Genres = () => {
    const {isLoading, data} = useGenreApi()


  return isLoading? <div className="mx-6 mb-6"> <SkeletonLoader count={5} className="h-7 mt-6"/></div> :
        <div>
            <Menu menu={{
                title:'Popular genres',
                item: data || []
            }}/>
        </div>
}

export default Genres