import styles from "./PhotoUser.module.css"
import noPhoto from "../../assets/imgs/noPhoto.svg";
import {useContext} from "react";
import {MyContext} from "../../App";
import {NoPhoto} from "./NoPhoto/NoPhoto";


export const PhotoUser = ({children}) => {
    const {user} = useContext(MyContext)
    return (
        <div className={styles.profile}>
            <img src={user.avatar || noPhoto} className={styles.img} alt="avatar"/>
            {children}
        </div>
    )
}