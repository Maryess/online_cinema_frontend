import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IAuth } from './auth.interface'
import styles from './auth.module.scss'
import AuthItem from './AuthItem'
import AuthItemList from './AuthItemList'
import AuthButton from './button/AuthButton'

const AuthContainer = () => {
  const [reg,setReg] = useState<string>('auth')
  const {formState, register, handleSubmit} = useForm<IAuth>()

  const onSubmit:SubmitHandler<IAuth> = (data) => console.log(data)


  return ( 
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <span className={styles.wrapper}>Auth</span> 
      <AuthItemList/>
      <div className={styles.footer}>
        <AuthButton title='Login' classname= 'rounded-l-xl'/>
        <AuthButton title='Register' classname='rounded-r-xl'/>
      </div> 
    </form>
  )
}

export default AuthContainer