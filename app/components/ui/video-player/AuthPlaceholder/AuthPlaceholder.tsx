import { FC } from 'react'
import styles from './AuthPlaceholder.module.scss'
import AuthButton from './AuthButton'

const AuthPlaceholder:FC<{slug:string}> = ({slug}) => {
  return (
    <div className={styles.placeholder}>
        <div>You need to sing in before you will watch </div>
        <AuthButton slug={slug}/>
    </div>
  )
}

export default AuthPlaceholder