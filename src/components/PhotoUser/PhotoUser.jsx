import noPhoto from '../../assets/imgs/noPhoto.svg';
import styles from './PhotoUser.module.css'

export const PhotoUser = ( { photo, children, isBigAvatar } ) => {
  return (
    <div>
      <img src={photo || noPhoto} className={isBigAvatar ? styles.bigAvatar : styles.smallAvatar} alt="avatar"/>
      {children}
    </div>
  )
}