import { useActions } from 'hooks/useAction'
import React, { FC, useState } from 'react'
import AdminFields from '../AdminFields'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IMovieState } from 'store/admin/admin.interfcae'
import Heading from 'components/ui/heading/Heading'

const EditMovie:FC = () => {
   
    const {createMovie} = useActions()
    const {
        register:registerInput,
        handleSubmit,
        formState,
        reset
    } = useForm<IMovieState>({
        mode:'onChange'
    })

    const onSubmit:SubmitHandler<IMovieState> = (data) => {
        createMovie(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Heading title='Edit movie' className='text-2xl' />
            <AdminFields register={registerInput} formState={formState}/>
        </form>
    )
}

export default EditMovie