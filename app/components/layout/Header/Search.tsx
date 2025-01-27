import { FC, useState } from "react"
import styles from './Header.module.scss'
import MaterialIcon from "components/ui/MaterialIcon";
import cn from "classnames"

interface ISearch {
    type?:string;
    placeholder:string;
} 

const Search:FC<ISearch> = ({placeholder
}) => {

  return (
    <div >
        <input className={styles.search}  placeholder={placeholder} ></input>

    </div>
    
  )
}

export default Search