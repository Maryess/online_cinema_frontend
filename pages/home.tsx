import Auth from "components/screens/auth/Auth"
import Home from "components/screens/home/Home"
import { useMovieApi } from "hooks/useMovieApi"
import { NextPage } from "next"
import { useRouter } from "next/router"

const HomePage: NextPage= () =>{
    const {asPath} = useRouter()
    
    const {data}= useMovieApi()
    return <div>
       <Home />
    </div>
}

export default HomePage