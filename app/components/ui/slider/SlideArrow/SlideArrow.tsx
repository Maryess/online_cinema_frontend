import  { FC } from 'react'
import styles from './SlideArrow.module.scss'
import cn from 'classnames'
import MaterialIcon from 'components/ui/MaterialIcon'

interface ISlideArrow {
    variant: 'left' | 'right',
    click: ()=>void
}

const SlideArrow:FC<ISlideArrow> = ({variant,click}) => {

    const isLeft = variant === 'left'

    return (
        <button className={styles.button} onClick={click}>
            <MaterialIcon name= {isLeft?'MdChevronLeft' :'MdChevronRight'}/>
        </button>
    )
}

export default SlideArrow