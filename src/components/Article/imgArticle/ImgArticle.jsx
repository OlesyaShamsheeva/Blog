import styles from './ImgArticle.module.css'

export const ImgArticle = ( { url, isBigImg } ) => {
  return (
    <div>
      <img src={url} className={isBigImg ? styles.bigImg : styles.smallImg} alt="Article"/>
    </div>
  )
}