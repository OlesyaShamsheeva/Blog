import styles from './ImgArticle.module.css'
import img from "../../../../src/assets/imgs/img.png"
export const ImgArticle = ( {  photo,isBigImg } ) => {
  return (
    <div>
      <img src={photo||img} className={isBigImg ? styles.bigImg : styles.smallImg} alt="Article"/>
    </div>
  )
}