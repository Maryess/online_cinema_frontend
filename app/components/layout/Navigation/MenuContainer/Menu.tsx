import { FC } from "react"
import { IMenu } from "./menu.interface"
import styles from './Menu.module.scss'
import MenuItem from "./MenuItem"
import Heading from "components/ui/heading/Heading"
import dynamic from "next/dynamic"

const DynamicAuthItems = dynamic(() => import('./auth/AuthItem'), {
  ssr: false,
})

const Menu:FC<{menu:IMenu}> = ({menu : {title,item}}) => {
  return (
    <div className={styles.menu}>
      <ul className={styles.ul}>
      <Heading className="text-gray-500 mb-6" title={title}/>
      {item.map((el, index)=>{
          return <MenuItem key={el.link}
            itemMenu={{
              icon:el.icon,
              name:el.name,
              link:el.link
            }}
          />
      })}
      {title === 'General' ? <DynamicAuthItems/>: null}
     </ul>
    </div>
  )
}

export default Menu