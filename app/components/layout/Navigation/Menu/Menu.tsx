import Link from "next/link"
import { IMenu } from "./Menu.interface"
import styles from "./Menu.module.scss"
import { firstItem,secondItem,thirdItem } from "./menu.data"

const Menu = () => {
  return (
    <div className={styles.menu}>
            <ul>
                <div className={styles.title}>{firstItem.title}</div>
                {firstItem.item.map((el,index)=>{
                  return <li key={index}>
                    <Link href={el.link} className={styles.link}>{el.name}</Link>
                  </li>
                })}
            </ul>
            <ul>
                <div className={styles.title}>{secondItem.title}</div>
                {secondItem.item.map((el,index)=>{
                  return <li key={index}>
                    <Link href={el.link} className={styles.link}>{el.name}</Link>
                  </li>
                })}
            </ul>
            <ul>
            <div className={styles.title}> {thirdItem.title}</div>
              {thirdItem.item.map((el,index)=>{
                return <li key={index}>
                <Link href={el.link} className={styles.link}>{el.name}</Link>
              </li>
              })}
            
            </ul>
    </div>
  )
}

export default Menu