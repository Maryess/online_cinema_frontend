import {FC} from 'react'
import styles from '../auth.module.scss'
import cn from 'classnames'
import { useRouter } from 'next/router';

interface IButton {
    title:string;
    onclick?:()=> void;
    type?:string;
    classname:string;
}

const AuthButton:FC<IButton> = ({title,onclick,type,classname}) => {

  const {asPath} = useRouter()

  return (
    <button className={cn({[styles.active]:asPath === 'auth'},styles.button,classname)} onClick={onclick}>
        {title}
    </button>
  )
}

export default AuthButton