import { ChangeEvent, FC } from 'react'
import styles from './SearchField.module.scss'
import MaterialIcon from '../MaterialIcon'

interface ISearchField{
    handleSearch?:(e:ChangeEvent<HTMLInputElement>)=>void,
    searchTerm:string
}

const SearchField:FC<ISearchField> = ({handleSearch,searchTerm}) => {
  return (
    <div className={styles.search}>
        <MaterialIcon name="MdSearch"/>
        <input value={searchTerm} placeholder='Search' onChange={handleSearch} />
    </div>
  )
}

export default SearchField