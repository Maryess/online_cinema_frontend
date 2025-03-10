import {ButtonHTMLAttributes, FC, forwardRef} from 'react'
import styles from './Button.module.scss'


type TypeButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

interface IButton extends TypeButtonProps {}

const Button = forwardRef<HTMLButtonElement, IButton>(({...rest },ref) => {

  return (
    <button className={styles.button} ref={ref} {...rest} />
  )
}
)

export default Button