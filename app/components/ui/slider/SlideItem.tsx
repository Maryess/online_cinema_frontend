import {FC} from 'react'
import { ISlide } from './slider.interface';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from './Slider.module.scss'

interface ISlideItem {
    slide:ISlide;
    buttonTitle? :string;
}

const SlideItem:FC<ISlideItem>= ({slide,buttonTitle = 'Watch'}) => {

    const {push} = useRouter()
    
    return (
        <div className={styles.slide}>
            <Image 
                src={slide.bigPoster}
                layout='fill'
                alt={slide.name}
                draggable={false}
                unoptimized
                priority
                />

            <div className={styles.content}>
                <div className={styles.heading}>{slide.name}</div>
                <div className={styles.subHeading}>{slide.subTitle}</div>
                <button className={styles.button} onClick={()=> push(slide.link)}>
                    {buttonTitle}
                </button>
            </div>
        </div>
  )
}

export default SlideItem