import { useDebounce } from 'hooks/useDebounce'
import { ChangeEvent, FC, useState } from 'react'
import { useQuery } from 'react-query'
import { MovieService } from 'services/MovieService'

export const useSearch = () => {

    const [searchTerm,setSearchTerm] = useState('')
    const debounce = useDebounce(searchTerm,500)

    const {isSuccess,data} = useQuery(['search movie list', debounce], ()=>
        MovieService.getAll(debounce),{
            select: ({data}) => data,
            enabled: !!debounce
        }
    )
  
    const handleSearch = (e:ChangeEvent<HTMLInputElement>)=>{
        setSearchTerm(e.target.value)
    }

    return {isSuccess, data, handleSearch, searchTerm}
}
