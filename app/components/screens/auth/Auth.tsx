import { FC } from 'react'
import { useForm } from 'react-hook-form'
import AuthForm from './authForm'
import AuthContainer from './AuthContainer'
import styles from './auth.module.scss'

const Auth:FC = () => {


  return (
    <div className={styles.auth}>
        <AuthContainer/>
    </div>
  )
}

export default Auth