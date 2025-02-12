import {FC} from 'react'
import styles from '../auth.module.scss'
import cn from 'classnames'

interface IButton {
    title:string;
    onClick?:void;
    type?:string;
    classname:string;
}

const AuthButton:FC<IButton> = ({title,onClick,type,classname}) => {
  return (
    <button className={cn(styles.button,classname)} onClick={()=>onClick}>
        {title}
    </button>
  )
}

export default AuthButton