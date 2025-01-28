import { FC, useState } from "react"
import styles from './Header.module.scss'
import { useGetMovie } from "./movie/useGetMovie";
import MovieItem from "./movie/MovieItem";
import MaterialIcon from "components/ui/MaterialIcon";

const Search:FC = (
) => {
  const {data} = useGetMovie()
  const [isCheck,setIsCheck] = useState<boolean>(false)
  const [term,setTerm] = useState<string>("")


  const changeValue = (val:boolean) =>{
    setIsCheck( val => !val)
  }

  const getValue = (e:string) => {

    setTerm(e)
    data?.map((el)=>{
      for(const element of el.name ){
        if(element === term){
          changeValue(isCheck)
        }
      } 
    })
  }

  return ( <div>
        {/* <MaterialIcon classname={styles.icon} name="MdSearch" /> */}
        <input onChange={(e)=>{
          getValue(e.target.value)
        }} className={styles.search}  placeholder="Search" />
        {data?.map((el)=>{
          return isCheck === true  ? <MovieItem key={el.name} itemMovie={{
            name:el.name,
            poster:el.poster,
            genres:el.genres
          }}/> :null
        })}
        
        </div>
  )
}

export default Search