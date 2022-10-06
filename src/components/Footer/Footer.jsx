
import logo from "../../assets/imgs/logoFooter.png"
import styles from "../Footer/Footer.module.css"
import {Reference} from "./Reference";
import {Navbar} from "../Navbar";
export const Footer=()=>{
    return <footer className={styles.footer}>
      <div className={styles.nav}><Navbar logo={logo} isHeader={false}/></div>
      <div><Reference/></div>
    </footer>
}