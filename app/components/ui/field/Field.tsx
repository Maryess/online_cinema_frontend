import { FC } from 'react';
import MaterialIcon from '../MaterialIcon';
import styles from './Field.module.scss'

interface IField {
    placeholder:string;
    text?:string;
    type:string;
}

const Field:FC <IField>= ({placeholder,text,type}) => {
  return (
    <input type={type} className={styles.field} placeholder={placeholder}>
        {text}
    </input>
  )
}

export default Field