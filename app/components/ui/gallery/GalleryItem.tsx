import React, { FC } from 'react'
import { IGalleryItem } from './gallery.interface'
import Link from 'next/link'
import styles from './Gallery.module.scss'

const GalleryItem:FC<IGalleryItem> = ({poster,url,name}) => {
  return (
    <div className={styles.gallery}>
        <Link href={url}>
            <img src={poster} height={150} width={100} alt={name} />
            <div className={styles.content}> 
                <div className={styles.title}>
                    {name}
                </div>
            </div>
        </Link>
    </div>
  )
}

export default GalleryItem