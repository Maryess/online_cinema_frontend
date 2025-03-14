import { FC } from "react"
import { menuItem } from "./menu.data"
import Menu from "./Menu"
import Genres from "./genres/Genres"
import Login from "./auth/Login"
import General from "./auth/General"

const MenuContainer:FC = () => {
  return (
    <div className="mb-4">
        <Menu menu={menuItem}/>  
        <Genres />  
        <General />
    </div>
  )
}

export default MenuContainer