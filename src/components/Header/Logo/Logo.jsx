import styles from "./Logo.module.css"
import logotip from '../../../assets/imgs/logotip.png'
export const Logo=()=>{
    return <div>
        <img src={logotip} className={styles.logo} alt=""/>
    </div>
}