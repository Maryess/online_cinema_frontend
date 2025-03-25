import  { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import Meta from 'utils/meta/Meta'
import AdminNavigation from 'components/ui/admin-navigation/AdminNavigation'
import Heading from 'components/ui/heading/Heading'
import SkeletonLoader from 'components/ui/SkeletonLoader'
import Field from 'components/ui/auth/field/Field'
import Button from 'components/ui/auth/button/Button'
import styles from './ActorEdit.module.scss'
import { IActorEditInput } from './actor-edit.interface'
import { useActorEdit } from './useActorEdit'
import Select from 'react-select'
import { useQuery } from 'react-query'
import { MovieService } from 'services/MovieService'

const ActorEdit:FC = () => {
  const {handleSubmit, register, formState:{errors}, setValue, getValues, control} = useForm<IActorEditInput>({
    mode:'onChange'
  })

  const {isLoading,onSubmit} = useActorEdit(setValue)

  return (
    <Meta title="Edit actor">
      <AdminNavigation/>
      <Heading title='Edit actor' className='text-3xl mb-4'/>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        {isLoading ? <SkeletonLoader count={3}/> : 
        <div className={styles.content}>
          <div className={styles.fields}>
            <Field
              {...register('name', {
            required: 'Name is required!',
            
            })}
            placeholder="Name"
            style={{width:'31%'}}
            /> 
            <Field
              {...register('slug', {
            required: 'Slug is required!',
            
            })}
            placeholder="Slug"
            style={{width:'31%'}}
            />
            <Field
              {...register('year', {
            required: 'Year is required!',
            
            })}
            placeholder="Year"
            style={{width:'31%'}}
            />
            <Field
              {...register('country', {
            required: 'Country is required!',
            
            })}
            placeholder="Country"
            style={{width:'31%'}}
            />
             <Field
              {...register('photo', {
            required: 'Country is required!',
            
            })}
            type='file'
            placeholder="Photo"
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
    </Meta>
  )
}

export default ActorEdit