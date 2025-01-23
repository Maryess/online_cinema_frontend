import { FC } from "react"
import { menuItem } from "./menu.data"
import Menu from "./Menu"

const MenuContainer:FC = () => {
  return (
    <div className="">
        <Menu menu={menuItem}/>    
    </div>
  )
}

export default MenuContainer