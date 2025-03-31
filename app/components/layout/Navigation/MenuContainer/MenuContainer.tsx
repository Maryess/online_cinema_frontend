import { FC } from "react"
import { menuItem } from "./menu.data"
import Menu from "./Menu"
import Genres from "./genres/Genres"
import dynamic from "next/dynamic"

const DynamicGenreMenu = dynamic(() => import('./genres/Genres'), {
  ssr: false,
})

const MenuContainer:FC = () => {
  return (
    <div className="mb-4">
        <Menu menu={menuItem}/>  
        <DynamicGenreMenu/>
        <Menu menu={{ title: 'General', item: [] }} />
    </div>
  )
}

export default MenuContainer