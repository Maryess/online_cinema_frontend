import Link from "next/link"
import { FC } from "react"
import { IMenu } from "./menu.interface"
import styles from './Menu.module.scss'
import MenuItem from "./MenuItem"
import {userItem,menuItem} from './menu.data'
import { items } from "./menu.data"

const Menu:FC<{menu:IMenu}> = ({menu}) => {
  return (
    <div className={styles.menu}>
      <div className={styles.heading}>{menu.title}</div>
      {menu.item.map((el, index)=>{
          return <ul key={index} className={styles.ul}>
            <MenuItem 
            itemMenu={{
              icon:`${el.icon}`,
              name:`${el.name}`,
              link:`${el.link}`
            }}
            />
         </ul>
      })}
     
    </div>
  )
}

export default Menu