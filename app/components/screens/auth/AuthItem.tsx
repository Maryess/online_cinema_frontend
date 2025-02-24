import  { FC } from 'react'
import styles from './auth.module.scss'
import Field from 'components/ui/field/Field'
import { useGetFiledValue } from 'hooks/useGetFIiedValue'

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

  const {getEmail,getPassword} = useGetFiledValue()

  return (
    fieldData.map((el,key)=>{
      return (
        <li className={styles.li} key={key}>
          <p>{el.title}</p>
          <Field type={el.type} placeholder={''} onChange={getEmail}/>
        </li>
      )
    })
    
  )
}

export default AuthItem