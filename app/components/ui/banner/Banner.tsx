import { FC } from 'react'
import styles from './Banner.module.scss'
import Image from 'next/image'

interface IBanner {
  imagePath:string;
  Info:FC | null;
}

const Banner:FC<IBanner> = ({imagePath, Info}) => {
  console.log(imagePath)
  return (
    <div className={styles.banner}>
        <Image  
          alt='' 
          src={`/${imagePath}`}
          layout='fill'
          draggable={false}
          unoptimized
          priority
        />
        {Info && <Info/>}
    </div>
  )
}

export default Banner