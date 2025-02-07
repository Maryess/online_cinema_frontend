import  { FC } from 'react'
import styles from './auth.module.scss'
import Field from 'components/ui/field/Field'

const fieldData = [
  {
    type:'email',
    placeholder:'Enter your email'
  },
  {
    type:'password',
    placeholder:'Enter your password'
  },
  {
    type:'text',
    placeholder:'Enter your name'
  },
]

const AuthItem:FC = () => {
  return (
    fieldData.map((el,key)=>{
      return (
        <li className={styles.li} key={key}>
          <Field type={el.type} placeholder={el.placeholder} />
        </li>
      )
    })
    
  )
}

export default AuthItem