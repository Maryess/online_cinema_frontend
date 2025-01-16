import Image from 'next/image'
import styles from './Header.module.scss'
import john_wick from '@public/images/john-wick.jpg'
import encanto from '@public/images/encanto-big.jpg'
import hobbit from '@public/images/hobbit.jpg'
import { useState } from 'react'

const movies = [
    {
        title:"encanto",
        src:encanto,
        flag:false
    },
    {
        title:"john-wick",
        src:john_wick,
        flag:false
    },
    {
        title:"hobbit",
        src:hobbit,
        flag:false
    }
]

const Header = () =>{

    const [first,setFirst] = useState<boolean>(false)
    const [second,setSecond] = useState<boolean>(false)
    const [three,setThree] = useState<boolean>(false)

    return <div className={styles.header}>
        <div className={styles.scroll_movies}> 
            <Image 
                src={encanto}
                alt={"encanto"}
                className={first === true && second && three ===false ? styles.active_movie : styles.hidden_movie}
                onClick={()=> setFirst(!first)}/> 
            <Image 
                src={john_wick}
                alt={"john_wick"}
                className={second === true && first === false && three === false? styles.active_movie : styles.hidden_movie}
                onClick={()=> setSecond(!second)}/> 
            <Image 
                src={hobbit}
                alt={"hobbit"}
                className={three === true && first  && second === false? styles.active_movie : styles.hidden_movie}
                onClick={()=> setThree(!three)}/> 
        {/* {
            movies.map((el,index)=>{
               return <Image 
                key={index}
                src={el.src}
                alt={el.title}
                className={scroll === false ? styles.hidden_movie : styles.active_movie}
                onClick={()=> setScroll(!scroll)}
            />
            })
        } */}
        </div>
    </div>
}

export default Header