import {Navbar} from "../Navbar";
import styles from "../Header/Header.module.css"
import logo from "../../assets/imgs/logoHeader.png"

export const Header = () => {
    return <header className={styles.header}>
        <div className={`${styles.headerWrap} container`}>
            <Navbar logo={logo} isHeader={true}></Navbar>
        </div>
    </header>
}
