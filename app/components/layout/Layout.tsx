import { FC } from "react"
import styles from "./Layout.module.scss"
import Navigation from "./Navigation/Navigation"
import SideBar from "./Sidebar/SideBar"

const Layout = ({children}:{children:React.ReactNode}) => {
    return (
    <div className={styles.layout}> 
    <Navigation />
    <div className={styles.center}>
        {children}
    </div>
    <SideBar/>
    </div>)
}

export default Layout