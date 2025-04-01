import  { FC } from 'react'
import { IGenre, IMovie } from 'shared/types/movie.types'
import styles from './Info.module.scss'

interface IInfo{
    title:string;
    information:string;
    genres:IGenre[];
    actors:IGenre[]
}

const Info:FC<IInfo> = ({title,information,genres,actors}) => {
  return (
    <div className={styles.info}>
        <h3>{title}</h3>
        <div className={styles.information}>{information}</div>
        <div className={styles.genres}>Genres: {genres.map((el)=>el.name)}</div>
        <div className={styles.actors}>Actors: {actors.map((el)=> el.name)}</div>
    </div>
  )
}

export default Info