import { FC, useState } from "react"
import styles from './Header.module.scss'
import Search from "./Search"
import cn from "classnames"
import MovieItem from "./movie/MovieItem"
import Movie from "./movie/Movie"
import Heading from "components/ui/heading/Heading"
import MovieContainer from "./movie/MovieContainer"

const Header:FC = () => {

    return <div className={styles.header}>
      <MovieContainer />
    </div>
}

export default Header