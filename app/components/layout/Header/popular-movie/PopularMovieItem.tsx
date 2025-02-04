import styles from "../Header.module.scss"
import { FC } from "react"
import { IMovieItem } from "./movie.interface"

const PopularMovieItem:FC<{itemMovie: IMovieItem}>= ({itemMovie}) => {

  return (
    <div>
        <li className={styles.movie}>
            <img className={styles.poster} src={itemMovie.poster} alt="movie cart" width={60} height={120}/>
            <div className={styles.information}>
              <span>{itemMovie.name}</span>
            {itemMovie.genres.map((el)=>{ return <p className={styles.genres}>{el.name}</p> })}
            </div>
        </li>
    </div>
  )
}

export default PopularMovieItem