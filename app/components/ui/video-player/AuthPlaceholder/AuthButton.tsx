import { getMovieUrl } from 'config/api.config'
import Link from 'next/link'
import  { FC } from 'react'
import styles from './AuthPlaceholder.module.scss'

const AuthButton:FC<{slug:string}> = ({slug}) => {
  return (
    <Link href={`/auth?redirect=${getMovieUrl(`/${slug}`)}`}>
        <button className={styles.btn}>Sign in</button>
    </Link>
  )
}

export default AuthButton