import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IAuth } from './auth.interface'
import styles from './auth.module.scss'
import AuthItem from './AuthItem'
import AuthItemList from './AuthItemList'
import AuthButton from './button/AuthButton'
import { useAuth } from 'hooks/useAuht'

const AuthContainer = () => {
  const [reg,setReg] = useState<string>('auth')
  const {formState, handleSubmit} = useForm<IAuth>()
  const {auth,register} = useAuth()
  const onSubmit:SubmitHandler<IAuth> = (data) => console.log(data)
  const [stateAuth,setStateAuth] = useState<string>('auth')


  const handleClickAuth = (type:string) => {
    if(stateAuth === 'auth' && type === 'auth'){
      setStateAuth('auth')
      auth.mutate()
    }
     if(stateAuth === 'reg' && type === 'reg'){
      setStateAuth('reg')
      register.mutate()
    }
  }


  return ( 
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.wrapper}>{stateAuth === 'auth'? <span>Auth</span> : <span>Register</span>}</div> 
      <AuthItemList/>
      <div className={styles.footer}>
        <AuthButton title='Login' classname= {stateAuth === 'auth'? 'bg-primary rounded-l-xl': 'rounded-l-xl'} onclick={()=>handleClickAuth('auth')}/>
        <AuthButton title='Register' classname={stateAuth === 'reg'? 'bg-primary rounded-r-xl ': 'rounded-r-xl' }onclick={()=> handleClickAuth('reg')} />
      </div> 
    </form>
  )
}

export default AuthContainer