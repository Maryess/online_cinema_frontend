import  { FC } from 'react'
import styles from './auth.module.scss'
import Field from 'components/ui/field/Field'

const fieldData = [
  {
    type:'email',
    title:'e-mail'
  },
  {
    type:'password',
    title:'password'
  }
]

const AuthItem:FC = () => {
  return (
    fieldData.map((el,key)=>{
      return (
        <li className={styles.li} key={key}>
          <p>{el.title}</p>
          <Field type={el.type} placeholder={el.placeholder} />
        </li>
      )
    })
    
  )
}

export default AuthItem