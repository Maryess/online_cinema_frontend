import { FC, useState } from "react"
import styles from './Header.module.scss'
import Search from "./Search"
import cn from "classnames"
import MovieItem from "./movie/MovieItem"
import Movie from "./movie/Movie"

const Header:FC = () => {

    const [show,setShow] = useState<boolean>(false)

    return <div className={styles.header}>

       <Search/>
       <div className={cn({[styles.active]: show === true})}>
        {/* <Movie /> */}

       </div>
    </div>
}

export default Header