import React, { FC } from 'react'
import { useActorEdit } from './useActorEdit'
import { Controller, useForm } from 'react-hook-form'
import { IActorEditInput } from './actor-edit.interface'
import SkeletonLoader from 'components/ui/SkeletonLoader'
import styles from './ActorEdit.module.scss'
import Field from 'components/ui/auth/field/Field'
import Button from 'components/ui/auth/button/Button'
import UploadFile from 'components/ui/form-elements/UploadFile/UploadFile'

const ActorEditForm:FC = () => {

    const {handleSubmit, register, formState:{errors}, setValue, getValues, control} = useForm<IActorEditInput>({
        mode:'onChange'
      })
    
      const {isLoading,onSubmit} = useActorEdit(setValue)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        {isLoading ? <SkeletonLoader count={3}/> : 
        <div className={styles.content}>
          <div className={styles.fields}>
            <div className={styles.headerFields}>
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
            <div className={styles.wrapperFields}>
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
            </div>
            <div className={styles.uploadFields}>
                         <Controller
                                name="photo"
                                control={control}
                                defaultValue=""
                                render={({
                                    field: { value, onChange },
                                    fieldState: { error },
                                }) => (
                                    <UploadFile
                                        placeholder={value}
                                        folder='actors'
                                        onChange={onChange}
                                        value={value}
                                    />
                                )}
                                rules={{
                                    required: 'Photo is required!',
                                }}
                            />
            </div>
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

export default ActorEditForm