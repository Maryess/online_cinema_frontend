import { FC, useState } from "react"
import MovieItem from "./MovieItem"
import { useGetMovie } from "./useGetMovie"
import SkeletonLoader from "components/ui/SkeletonLoader"
import styles from '../Header.module.scss'

const Movie:FC = () => {
    const {isLoading,data} = useGetMovie()
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
      
    return ( isLoading? <SkeletonLoader count={3} className="h-9 mt-4"/> :
        <ul className={styles.ul}>
        {data?.map((el)=>{
          return isCheck === true  ? <MovieItem key={el.name} itemMovie={{
            name:el.name,
            poster:el.poster,
            genres:el.genres
          }}/> :null
        })}
        </ul>
    )
}

export default Movie