import { FC, useState } from "react"
import styles from './Header.module.scss'
import { useGetMovie } from "./movie/useGetMovie";
import MovieItem from "./movie/MovieItem";


const Search:FC = (
) => {
  let check = false
  const {data} = useGetMovie()
  const [isCheck,setIsCheck] = useState<boolean>(false)
  const [term,setTerm] = useState<string>("")


  const change = (val:boolean) =>{
    setIsCheck( val => !val)
  }

  const getValue = (e:string) => {
    setTerm(e)
    data?.map((el)=>{
      if(el.name === term){
        change(isCheck)
        return console.log(isCheck)
      }
    })
  }

  return ( <div>
        <input onChange={(e)=>{
          getValue(e.target.value)
        }} className={styles.search}  placeholder="Search" />
        {data?.map((el)=>{
          return isCheck === true && term === el.name ? <MovieItem key={el.name} itemMovie={{
            name:el.name,
            poster:el.poster
          }}/> :null
        })}
        
        </div>
  )
}

export default Search