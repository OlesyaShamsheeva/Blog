import {Logo} from "./Logo";
import {NavAction} from "./NavAction";
import styles from "./Header.module.css"
import {NavArticle} from "./NavArticle";
export const Header = () => {
    return (
        <div className={styles.header}>
<Logo/>
         <NavAction/>
        </div>

    )
}