import { ChangeEvent, FC, InputHTMLAttributes } from 'react';
import MaterialIcon from '../../MaterialIcon';
import styles from './Field.module.scss'
import { forwardRef } from 'react'
import { IField } from 'shared/types/ui.types';

const Field = forwardRef<HTMLInputElement, IField>(
	({ placeholder, type = 'text', style, ...rest }, ref) => {
		return (
		<input ref={ref} type={type} {...rest} className={styles.field} placeholder={placeholder}/>
		)
	}
)

Field.displayName = 'Field'

export default Field