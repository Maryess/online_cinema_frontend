import {ButtonHTMLAttributes, FC, forwardRef} from 'react'
import styles from './Button.module.scss'
import { IButton } from 'shared/types/ui.types'


const Button = forwardRef<HTMLButtonElement, IButton>(({...rest },ref) => {

  return (
    <button className={styles.button} ref={ref} {...rest} />
  )
}
)

Button.displayName = 'Button'

export default Button