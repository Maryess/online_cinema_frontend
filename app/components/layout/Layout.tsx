import { FC } from "react"
import styles from "./Layout.module.scss"
import Navigation from "./Navigation/Navigation"
import Header from "./Header/Header"

const Layout:FC<{children: React.ReactNode}> = ({children}) => {
    return (
    <div className={styles.layout}> 
    <Navigation />
    <div className={styles.center}>
        {children}
    </div>
    <Header/>
    </div>)
}

export default Layout