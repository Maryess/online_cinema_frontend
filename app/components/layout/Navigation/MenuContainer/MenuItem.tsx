import React, { FC } from "react"
import { IMenuItem } from "./menu.interface"
import cn from "classnames"
import styles from './Menu.module.scss'
import Link from "next/link"
import { useRouter } from "next/router"
import MaterialIcon from "components/ui/MaterialIcon"


const MenuItem:FC<{itemMenu:IMenuItem}>=({itemMenu}) => {
    const {asPath} = useRouter()

  return (
        <li className={cn({
            [styles.active]: asPath === itemMenu.link
            })}>
            <Link href={itemMenu.link}>
                <div className={styles.link_content}>
                <MaterialIcon 
                    name={itemMenu.icon}
                />
                <span>{itemMenu.name}</span>
                </div>
            </Link>
        </li>
        )
}
export default MenuItem