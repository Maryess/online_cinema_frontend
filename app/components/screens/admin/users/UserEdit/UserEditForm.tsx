import { FC } from 'react'
import { useUserEdit } from './useUserEdit'
import { useForm } from 'react-hook-form'
import { IUserEditInput } from './user-edit.interface'
import SkeletonLoader from 'components/ui/SkeletonLoader'
import styles from './UseEdit.module.scss'
import Field from 'components/ui/auth/field/Field'
import Button from 'components/ui/auth/button/Button'

const UserEditForm:FC = () => {

     const {handleSubmit, register, formState:{errors}, setValue, getValues} = useForm<IUserEditInput>({
          mode:'onChange'
        })
    
      const {isLoading, onSubmit} = useUserEdit(setValue)

  return (
         <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        {isLoading ? <SkeletonLoader count={3}/> : 
        <div className={styles.content}>
          <div className={styles.fields}>
            <Field
              {...register('email', {
            required: 'Email is required!',
            
            })}
            placeholder="Email"
            style={{width:'31%'}}
            /> 
            <Field
              {...register('password', {
            required: 'Password is required!',
            
            })}
            placeholder="Email"
            style={{width:'31%'}}
            />
          </div>
            <Button
                type="submit"   
            >
                Update
            </Button>
        </div>}
      </form>
  )
}

export default UserEditForm