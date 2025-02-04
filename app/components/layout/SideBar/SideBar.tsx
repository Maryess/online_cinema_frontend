import { FC } from "react"
import styles from './SideBar.module.scss'
import Search from "./search/Search"

const SideBar:FC = () => {

    return <div className={styles.sidebar}>
      <Search/>
    </div>
}

export default SideBar