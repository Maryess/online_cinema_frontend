import { FC, useState } from "react"
import styles from './Header.module.scss'
import Search from "./Search"
import cn from "classnames"
import MovieItem from "./popular-movie/PopularMovieItem"
import Movie from "./popular-movie/PopularMovie"
import Heading from "components/ui/heading/Heading"
import Popula from "./popular-movie/PopularMovieContainer"
import PopularMovieContainer from "./popular-movie/PopularMovieContainer"

const Header:FC = () => {

    return <div className={styles.header}>
      <PopularMovieContainer />
    </div>
}

export default Header