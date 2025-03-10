import { FC } from "react"
import { menuItem } from "./menu.data"
import Menu from "./Menu"
import Genres from "./genres/Genres"
import Login from "./auth/Login"

const MenuContainer:FC = () => {
  return (
    <div className="mb-4">
        <Menu menu={menuItem}/>  
        <Genres />  
        <Login itemMenu={{
          name:'Login',
          link:'/auth',
          icon:'Md14Mp'
        }}/>
    </div>
  )
}

export default MenuContainer