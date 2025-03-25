import { FC } from 'react'
import { IAdminNavItem } from './admin-navigation.interface'
import styles from './AdminNavigation.module.scss'
import Link from 'next/link'

const AdminNavItem:FC<{item:IAdminNavItem}> = ({item:{title,link}}) => {
  return (
    <li className={styles.li}>
        <Link href={link}>{title}</Link>
    </li>
  )
}

export default AdminNavItem