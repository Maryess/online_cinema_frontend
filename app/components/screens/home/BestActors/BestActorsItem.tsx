import React, { FC } from 'react'
import { IActor } from 'shared/types/movie.types'
import styles from '../Home.module.scss'
import Link from 'next/link'

const BestActorsItem:FC<{actor:IActor}> = ({actor}) => {
  return (
    <div >
        <Link href={actor.slug}>
            <img  className={styles.image} src={actor.photo} width={100} height={150} alt={actor.name} />
            <div className={styles.info}>
                <span>{actor.name}</span>
            </div>
        </Link>
    </div>
  )
}

export default BestActorsItem