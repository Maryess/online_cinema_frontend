import React, { FC } from 'react'
import { IGalleryItem } from './gallery.interface'
import Link from 'next/link'
import styles from './Gallery.module.scss'
import Image from 'next/image'

const GalleryItem:FC<IGalleryItem> = ({poster,url,name}) => {
  return (
        <Link href={url}>
            <Image src={poster} height={80} width={100} alt={name || ''} />
            <div className={styles.title}>
            </div>
        </Link>
  )
}

export default GalleryItem