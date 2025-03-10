import  { ChangeEvent, FC, useState } from 'react'
import AuthItem from './AuthItem'
import styles from './auth.module.scss'
import Field from 'components/ui/field/Field'
import { useGetFiledValue } from 'hooks/useGetFIiedValue'
import { FormState, useForm, UseFormRegister } from 'react-hook-form'
import { IAuth } from './auth.interface'


interface IAuthFields {
	register: UseFormRegister<any>
	formState: FormState<any>
	isPasswordRequired?: boolean
}

const AuthFields:FC<IAuthFields> = ({register,formState,isPasswordRequired= false}) => {
    return (
    <ul className={styles.ul}>
       <li className={styles.li}>
            <p></p>
            <Field
				{...register('email', {
					required: 'Email is required!',
					
				})}
				placeholder="E-mail"
				
			/>
        </li>
        <li className={styles.li}>
            <p></p>
            <Field
				{...register(
					'password',
					isPasswordRequired
						? {
								required: 'Password is required!',
								minLength: {
									value: 6,
									message: 'Min length should more 6 symbols!',
								},
						  }
						: {}
				)}
				placeholder="Password"
				type="password"
				
			/>
        </li>
    </ul>
  )
}

export default AuthFields