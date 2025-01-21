import { FC } from "react";
import styles from './Navigation.module.scss'
import Link from "next/link";
import { IMenu } from "./Menu/Menu.interface";
import Menu from "./Menu/Menu";

const Navigation = () =>{
    return(
        <div className={styles.navigation}>
            <Menu />
        </div>
    )
}

export default Navigation