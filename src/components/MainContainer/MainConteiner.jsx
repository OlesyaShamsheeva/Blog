import {Header} from "../Header";
import {Footer} from "../Footer";

import styles from "../MainContainer/MainConteiner.module.css"

export const MainContainer = ({children}) => {
    return (
        <div className={styles.wrapper}>
            <Header/>
            <main className={`${styles.main} container`}>{children}</main>
            <Footer className={styles.footer}/>
        </div>)
}