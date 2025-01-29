import { FC } from "react"
import { IMenu } from "./menu.interface"
import styles from './Menu.module.scss'
import MenuItem from "./MenuItem"
import Heading from "components/ui/heading/Heading"

const Menu:FC<{menu:IMenu}> = ({menu}) => {
  return (
    <div className={styles.menu}>
      <ul className={styles.ul}>
      <Heading className="text-gray-500 mb-6" title={menu.title}/>
      {menu.item.map((el, index)=>{
          return <MenuItem key={el.link}
            itemMenu={{
              icon:el.icon,
              name:el.name,
              link:el.link
            }}
            />
         
      })}
     </ul>
    </div>
  )
}

export default Menu