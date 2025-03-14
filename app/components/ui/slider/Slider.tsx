import  { FC } from 'react'
import { ISlide } from './slider.interface';
import styles from './Slider.module.scss'
import { useSlider } from './useSlider';
import SlideArrow from './SlideArrow/SlideArrow';
import SlideItem from './SlideItem';
import { CSSTransition } from 'react-transition-group'

interface ISlider {
    buttonTitle?:string;
    slides:ISlide[]
}

const Slider:FC<ISlider> = ({buttonTitle,slides}) => {

    const {handleArrowClick,
        isNext,isPrev,
        index,slideIn
    } = useSlider(slides.length)

    return (  
        <div className={styles.slider}>
            <CSSTransition 
                in={slideIn}
                classNames='slide-animation'
                timeout={300}
                unmountOnExit
            >
                <SlideItem slide={slides[index]} />
            </CSSTransition>
            {
                isPrev && <SlideArrow variant='left' click={()=>handleArrowClick('prev')}/>
            }
             {
                isNext && <SlideArrow variant='right' click={()=>handleArrowClick('next')}/>
            }
        </div>
  )
}

export default Slider