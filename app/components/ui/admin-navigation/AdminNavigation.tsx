import {FC} from 'react'
import styles from './AdminNavigation.module.scss'
import AdminNavItem from './AdminNavItem'
import { navItems } from './admin-navigation.data'

const AdminNavigation:FC = () => {
  return (
    <nav className={styles.nav}>
        <ul>
           {navItems.map((el)=> <AdminNavItem key={el.title} item={el}/>)}
        </ul>
    </nav>
  )
}

export default AdminNavigation