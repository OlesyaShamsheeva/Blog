import styles from "./NavAction.module.css"
import {useNavigate} from "react-router-dom";

export const NavAction = ({auth,isHeader}) => {
    const navigate=useNavigate()
    return (
        <div className={styles.button}>
            <button className={(isHeader)? styles.button_white:styles.button_black}  onClick={() =>navigate("/authorization")} >Log in</button>
            <button  className={(isHeader)? styles.button_black:styles.button_black_footer} onClick={() => navigate("/registration")} > Sign in</button>
        </div>

    )
}