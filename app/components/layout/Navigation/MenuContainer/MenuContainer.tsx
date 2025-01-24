import { FC } from "react"
import { menuItem } from "./menu.data"
import Menu from "./Menu"
import Genres from "./genres/Genres"

const MenuContainer:FC = () => {
  return (
    <div className="mb-4">
        <Menu menu={menuItem}/>  
        <Genres />  
    </div>
  )
}

export default MenuContainer