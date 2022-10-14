import styles from "./PhotoUser.module.css"
import noPhoto from "../../assets/imgs/noPhoto.svg";


export const PhotoUser = ({photo, children,isBigAvatar,onSubmit}) => {
    return (
        <div>
            <img  src={photo || noPhoto} className={isBigAvatar?styles.bigAvatar:styles.smallAvatar} alt="avatar"/>
            {children}
        </div>
    )
}