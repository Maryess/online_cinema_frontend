import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { IMovieEditInput } from './movie-edit.interface'
import { useMovieEdit } from './useMovieEdit'
import SkeletonLoader from 'components/ui/SkeletonLoader'
import styles from './MovieEdit.module.scss'
import Field from 'components/ui/auth/field/Field'
import UploadFile from 'components/ui/form-elements/UploadFile/UploadFile'
import Button from 'components/ui/auth/button/Button'
import { useAdminGenreList } from './useAdminGenreList'
import Select from 'components/ui/select/Select'
import dynamic from 'next/dynamic'
import { useAdminActorsList } from './useAdminActorsList'

const DynamicSelect = dynamic(() => import("components/ui/select/Select"), {
    ssr:false
})

const MovieEditForm:FC = () => {

    const {
            handleSubmit,
            register,
            formState: { errors },
            setValue,
            getValues,
            control,
    } = useForm<IMovieEditInput>({
            mode: 'onChange',
    })


    const {isLoading,onSubmit} = useMovieEdit(setValue)
    const {isLoading:isGenresLoading, data:genresData} = useAdminGenreList()
    const {isLoading:isActorsLoading, data:actorsData} = useAdminActorsList()

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
                <div className={styles.centerFields}>
                <Field
                    {...register('country', {
                required: 'Country is required!',
                
                    })}
                    placeholder="Country"
                    style={{width:'31%'}}
                    /> 
                    <Field
                    {...register('duration', {
                    required: 'Duration is required!',
                    
                    })}
                    placeholder="Duration"
                    style={{width:'31%'}}
                    />
                    <Field
                    {...register('year', {
                    required: 'Year is required!',
                    
                    })}
                    placeholder="Year"
                    style={{width:'31%'}}
                    />
                </div>
                <div className={styles.wrapperFields}>
                        <Controller
                                name="genres"
                                control={control}
                                render={({
                                    field,
                                    fieldState: { error },
                                }) => (
                                   <DynamicSelect 
                                    field={field}
                                    options={genresData || []}
                                    isLoading={isGenresLoading}
                                    isMulti
                                    placeholder='Genres'
                                    
                                   />
                                )}
                                rules={{
                                    required: 'Genres is required!',
                                }}
                            />
                             <Controller
                                name="actors"
                                control={control}
                                render={({
                                    field,
                                    fieldState: { error },
                                }) => (
                                   <DynamicSelect 
                                    field={field}
                                    options={actorsData || []}
                                    isLoading={isActorsLoading}
                                    isMulti
                                    placeholder='Actors'
                                    
                                   />
                                )}
                                rules={{
                                    required: 'Actors is required!',
                                }}
                            />
                        
                </div>
                <div className={styles.uploadsFIelds}>
                            <Controller
                                name="poster"
                                control={control}
                                defaultValue=""
                                render={({
                                    field: { value, onChange },
                                    fieldState: { error },
                                }) => (
                                    <UploadFile
                                        placeholder={value}
                                        folder='movies'
                                        onChange={onChange}
                                        value={`/${value}`}
                                    />
                                )}
                                rules={{
                                    required: 'Poster is required!',
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

export default MovieEditForm