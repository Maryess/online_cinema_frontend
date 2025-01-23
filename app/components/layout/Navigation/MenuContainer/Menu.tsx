import { FC } from "react"
import { IMenu } from "./menu.interface"
import styles from './Menu.module.scss'
import MenuItem from "./MenuItem"

const Menu:FC<{menu:IMenu}> = ({menu}) => {
  return (
    <div className={styles.menu}>
      <ul className={styles.ul}>
      <div className={styles.heading}>{menu.title}</div>
      {menu.item.map((el, index)=>{
          return <MenuItem key={el.link}
            itemMenu={{
              icon:`${el.icon}`,
              name:`${el.name}`,
              link:`${el.link}`
            }}
            />
         
      })}
     </ul>
    </div>
  )
}

export default Menu