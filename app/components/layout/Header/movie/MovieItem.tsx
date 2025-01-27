import Image from "next/image"
import styles from "../Header.module.scss"
import { useGetMovie } from "./useGetMovie"
import { FC } from "react"
import { IMovie } from "shared/types/movie.types"
import { IMovieItem } from "./movie.interface"

const MovieItem:FC<{itemMovie: IMovieItem}>= ({itemMovie}) => {

  return (
    <div>
        <li className={styles.movie}>
            <img className={styles.poster} src={itemMovie.poster} alt="movie cart" width={130} height={200}/>
            <div className={styles.name}>{itemMovie.name}</div>
        </li>
    </div>
  )
}

export default MovieItem