import React, { FC } from 'react'
import { IGalleryItem } from './gallery.interface'
import Link from 'next/link'
import styles from './Gallery.module.scss'

const GalleryItem:FC<IGalleryItem> = ({poster,url,name}) => {
  return (
        <Link href={url}>
            <img src={poster} height={150} width={100} alt={name} />
            <div className={styles.title}>
                {name}
            </div>
        </Link>
  )
}

export default GalleryItem