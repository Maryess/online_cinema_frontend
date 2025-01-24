import { FC } from "react";
import styles from './Navigation.module.scss'
import Link from "next/link";
import { IMenu } from "./MenuContainer/menu.interface";
import Menu from "./MenuContainer/Menu";
import MenuContainer from "./MenuContainer/MenuContainer";

const Navigation = () =>{
    return(
        <div className={styles.navigation}>
            <MenuContainer/>
        </div>
    )
}

export default Navigation