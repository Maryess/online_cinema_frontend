import  { FC } from 'react'
import { IGenreEditInput } from './genre-edit.interface'
import { useForm } from 'react-hook-form'
import { useGenreEdit } from './useGenreEdit'
import Meta from 'utils/meta/Meta'
import AdminNavigation from 'components/ui/admin-navigation/AdminNavigation'
import Heading from 'components/ui/heading/Heading'
import SkeletonLoader from 'components/ui/SkeletonLoader'
import Field from 'components/ui/auth/field/Field'
import Button from 'components/ui/auth/button/Button'
import styles from './GenreEdit.module.scss'

const GenreEdit:FC = () => {
  const {handleSubmit, register, formState:{errors}, setValue, getValues} = useForm<IGenreEditInput>({
    mode:'onChange'
  })

  const {isLoading,onSubmit} = useGenreEdit(setValue)

  return (
    <Meta title="Edit genre">
      <AdminNavigation/>
      <Heading title='Edit genre' className='text-3xl mb-4'/>
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

export default GenreEdit