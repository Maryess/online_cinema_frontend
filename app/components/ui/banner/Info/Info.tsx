import  { FC } from 'react'
import { IGenre, IMovie } from 'shared/types/movie.types'
import styles from './Info.module.scss'
import { IInfo } from '../banner.interface'


const Info:FC<IInfo> = ({type, title,description,genres=[],actors=[]}) => {
  return (
    type === 'movie' ? 
      <div className={styles.infoMovie}>
          <h3>{title}</h3>
          <div className={styles.information}>{description}</div>
          <div className={styles.genres}>Genres: {genres.map((el)=>el.name)}</div>
          <div className={styles.actors}>Actors: {actors.map((el)=> el.name)}</div>
      </div>
      :
      <div className={styles.infoActor}>
        <h3>{title}</h3>
        <div className={styles.information}>{description}</div>
      </div>
  )
}

export default Info