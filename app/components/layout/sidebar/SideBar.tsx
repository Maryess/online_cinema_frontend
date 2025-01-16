import Link from "next/link"
import styles from "./SideBar.module.scss"

interface Props{
    side:string
}

const SideBar = ({side}:Props) => {

    return <div className={styles.sidebar}>
        {side === "left" ?
        <div className={styles.lists}> 
            <ul className={styles.navigation}>
                <li>
                    <Link href={"/home"}>Home</Link>
                </li>
                <li>
                    <Link href={"/profile"}>Profile</Link>
                </li>
                 <li>
                    <Link href={"/movies"}>Movie</Link>
                </li>
            </ul>
            <ul className={styles.best_genres}>
                <li>Drama</li>
                <li>Horror</li>
                <li>Action</li>
                <li>Comedy</li>    
            </ul>
            <ul>
            </ul>   
        </div> :
            <div className={styles.search}>

            </div> 
        }   
        </div>  
}

export default SideBar