import { FC } from 'react'
import styles from './Banner.module.scss'
import Image from 'next/image'
import Info from './Info/Info';
import { IBanner } from './banner.interface';


const Banner:FC<IBanner> = ({type,imagePath, info}) => {
  console.log(imagePath)
  return (
    type === 'movie'? 
      <div className={styles.bannerMovie}>
          <Image  
            alt='' 
            src={`${imagePath}`}
            layout='fill'
            draggable={false}
            unoptimized
            priority
          />
          <Info type='movie' title={info.title} genres={info.genres || []} actors={info.actors || []} description={info.description}/>
      </div>
      :
      <div className={styles.bannerActor}>
        <div className={styles.photo}>
          <Image  
              alt='' 
              src={`${imagePath}`}
              height={100} 
              width={200}
              draggable={false}
              unoptimized
              priority
            />
        </div>
        <Info type='actor' title={info.title} genres={info.genres || []} actors={info.actors || []} description={info.description}/>
      </div>
  )
}

export default Banner