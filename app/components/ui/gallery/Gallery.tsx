import React, { FC } from 'react'
import { IGallery } from './gallery.interface'
import styles from './Gallery.module.scss'
import GalleryItem from './GalleryItem'

const Gallery:FC<IGallery> = ({item}) => {
  return (
    <div className={styles.gallery}>
      {
            item.map((el)=>{
                return <GalleryItem key={el.name} url={el.url} name={el.name} poster={el.poster}/>
            })
        }
    </div>
  )
}

export default Gallery