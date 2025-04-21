import { FC } from 'react'
import styles from './AuthPlaceholder.module.scss'
import AuthButton from './AuthButton'

const AuthPlaceholder:FC<{slug:string}> = ({slug}) => {
  return (
    <div className={styles.placeholder}>
        <span>You need to login before you will can watch </span>
        <AuthButton slug={slug}/>
    </div>
  )
}

export default AuthPlaceholder