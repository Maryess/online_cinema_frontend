import { FC } from 'react'
import { IActor } from 'shared/types/movie.types'
import BestActorsItem from './BestActorsItem'
import styles from '../Home.module.scss'

const BestActorList:FC<{actors:IActor[]}> = ({actors}) => {
  return (
    <div className={styles.list}>
        {
            actors.map((el)=>{
                return <BestActorsItem actor={el}/>
            })
        }
    </div>
  )
}

export default BestActorList