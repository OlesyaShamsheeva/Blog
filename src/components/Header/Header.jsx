import {Navbar} from "../Navbar/Navbar";
import styles from "../Header/Header.module.css"
import logo from "../../assets/imgs/logoHeader.png"

export const Header = () => {
    return <header className={styles.header}>
        <Navbar logo={logo} isHeader={true}>111</Navbar>
    </header>
}
