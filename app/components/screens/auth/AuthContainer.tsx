import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IAuth } from './auth.interface'
import styles from './auth.module.scss'
import AuthItem from './AuthItem'

const AuthContainer = () => {
  const [reg,setReg] = useState<string>('auth')
  const {formState, register, handleSubmit} = useForm<IAuth>()

  const onSubmit:SubmitHandler<IAuth> = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ul className={styles.ul}>
        <AuthItem/>
      </ul>
    </form>
  )
}

export default AuthContainer