import Header from "./header/Header"
import SideBar from "./sidebar/SideBar"
import styles from "./Layout.module.scss"

const Layout = ({children}:
    {children:React.ReactNode}) => {
    return <div className={styles.layout}> 
        <Header/>
        <div className={styles.center}>
            <SideBar side="left" />
            {children}
            <SideBar side="right"/>
        </div>  
    </div>
}

export default Layout