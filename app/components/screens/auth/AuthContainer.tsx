import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IAuth } from './auth.interface'
import styles from './auth.module.scss'
import AuthItem from './AuthItem'
import AuthItemList from './AuthItemList'

const AuthContainer = () => {
  const [reg,setReg] = useState<string>('auth')
  const {formState, register, handleSubmit} = useForm<IAuth>()

  const onSubmit:SubmitHandler<IAuth> = (data) => console.log(data)

  return ( 
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <AuthItemList/>
    </form>
  )
}

export default AuthContainer