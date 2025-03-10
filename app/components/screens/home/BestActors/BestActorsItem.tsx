import React, { FC } from 'react'
import { IActor } from 'shared/types/movie.types'
import styles from '../Home.module.scss'
import Link from 'next/link'
import GetContent from 'components/ui/get-content/GetContent'

const BestActorsItem:FC<{actor:IActor}> = ({actor}) => {
  return (
    <div >
        <Link href={`actor/${actor.slug}`}>
           <GetContent link={actor.photo} height={150} width={100} name={actor.name} />
            <div className={styles.info}>
                <span className={styles.actor_name}>{actor.name}</span>
            </div>
        </Link>
    </div>
  )
}

export default BestActorsItem