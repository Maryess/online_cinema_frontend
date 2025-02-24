import { ChangeEvent, FC } from 'react';
import MaterialIcon from '../MaterialIcon';
import styles from './Field.module.scss'

interface IField {
    placeholder:string;
    text?:string;
    type:string;
    onChange:(e:ChangeEvent<HTMLInputElement>)=>void;
}

const Field:FC <IField>= ({placeholder,text,type,onChange}) => {
  return (
    <input type={type} className={styles.field} placeholder={placeholder} onChange={onChange}>
        {text}
    </input>
  )
}

export default Field