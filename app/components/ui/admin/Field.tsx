import { FC, forwardRef } from 'react'
import { IField } from 'shared/types/ui.types'
import styles from '../auth/field/Field.module.scss'

const AdminField= forwardRef<HTMLInputElement,IField>(({placeholder, ...rest }, ref) => {
    return (
    <input className={styles.field} placeholder={placeholder} {...rest} ref={ref} />
  )
}
)

AdminField.displayName = 'AdminField'

export default AdminField
