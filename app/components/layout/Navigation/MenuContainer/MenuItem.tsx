import React, { FC } from "react"
import { IMenuItem } from "./menu.interface"
import { items } from "./menu.data"
import { menuItem } from "./menu.data"
import styles from './Menu.module.scss'
import Link from "next/link"


const MenuItem:FC<{itemMenu:IMenuItem}>=({itemMenu}) => {
  return (
       
            <Link href={itemMenu.link}>
                <a className={styles.title}>{itemMenu.name}</a>
            </Link>
        )
}
export default MenuItem