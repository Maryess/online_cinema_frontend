import { FC } from 'react'
import styles from './Admin.module.scss'
import AdminField from 'components/ui/admin/Field'
import { FormState, UseFormRegister } from 'react-hook-form'

interface IAdminFields {
    register:UseFormRegister<any>
    formState: FormState<any>
}

const AdminFields:FC<IAdminFields>= ({register,formState}) => {
  return (
    <ul className={styles.fields}>
        <div>
            <li>
                <span>Title</span>
                <AdminField {
                    ...register('title-movie', {
                        required:'Title-movie is required'
                    })
                } 
                placeholder='Title'
                />    
            </li> 
            <li>
                <span>Slug</span>
                <AdminField {
                    ...register('slug-movie', {
                        required:'Slug-movie is required'
                    })
                } 
                placeholder='Slug'
                />    
            </li> 
        </div>
        <div  >
            <li>
                <span>Title</span>
                <AdminField {
                    ...register('country-movie', {
                        required:'Country-movie is required'
                    })
                } 
                placeholder='Country'
                />    
            </li> 
            <li>
                <span>Title</span>
                <AdminField {
                    ...register('Duration-movie', {
                        required:'Duration is required'
                    })
                } 
                placeholder='Duration'
                />    
            </li> 
            <li>
                <span>Title</span>
                <AdminField {
                    ...register('Year-movie', {
                        required:'Year is required'
                    })
                } 
                placeholder='Year'
                />    
            </li> 
        </div>
        <div>
            <li>
                <span>Title</span>
                <AdminField {
                    ...register('title-movie', {
                        required:'Title-movie is required'
                    })
                } 
                placeholder='Title'
                />    
            </li> 
            <li>
                <span>Slug</span>
                <AdminField {
                    ...register('slug-movie', {
                        required:'Slug-movie is required'
                    })
                } 
                placeholder='Slug'
                />    
            </li> 
        </div>
    </ul>
  )
}

export default AdminFields