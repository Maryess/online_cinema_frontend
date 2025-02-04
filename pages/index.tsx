import Auth from "components/screens/auth/Auth"
import Home from "components/screens/home/Home"
import { NextPage } from "next"
import { useRouter } from "next/router"

const HomePage: NextPage= () =>{
    const {asPath} = useRouter()
    
    return <div>
       <Home/>
       <Auth/>
    </div>
}

export default HomePage