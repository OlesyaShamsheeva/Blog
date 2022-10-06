import styles from "./Logo.module.css"

export const Logo=({logo})=>{
    return <div>
        <img src={logo} className={styles.logo} alt=""/>
    </div>
}