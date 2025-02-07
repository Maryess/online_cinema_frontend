import { FC } from "react"
import styles from './SideBar.module.scss'
import Search from "./search/Search"
import MoviesContainer from "./MovieContainer/MoviesContainer"

const SideBar:FC = () => {

    return <div className={styles.sidebar}>
      <Search/>
      <MoviesContainer/>
    </div>
}

export default SideBar