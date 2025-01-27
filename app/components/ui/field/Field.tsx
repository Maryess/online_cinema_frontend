import MaterialIcon from '../MaterialIcon';
import styles from './Field.module.scss'

interface IField {
    placeholder:string;
    text?:string;
    type:string;
}

const Field = (props:IField) => {
  return (
    <input type={props.type} className={styles.field} placeholder={props.placeholder}>
        {props.text}
    </input>
  )
}

export default Field