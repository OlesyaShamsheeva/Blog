import {ImgArticle} from "./imgArticle/ImgArticle";

import glass from "../../assets/imgs/glass.png"
import styles from "./Article.module.css"

export const Article = ({article, isBigImg = false, isVertical = false}) => {
    return (
        <div className={`${styles.wrapper} ${isVertical ? styles.column : styles.row}`}>
            <div>
                <ImgArticle url={article.url} isBigImg={isBigImg}/>
            </div>
            <div className={styles.informBlock}>
                <span className={styles.tag}> #Typography </span>
                <h4 className={styles.caption}>
                    {article.title}
                </h4>
                <div className={styles.text}>{article.text}</div>
                <div className={styles.inform}>
                    <img className={styles.ava} alt="User avatar"/>
                    <span className={styles.name}>{article.user}</span>
                    <span className={styles.data}>{article.data}  </span>
                    <span className={styles.view}>
                    <img src={glass} className={styles.icon} alt="Counter icon" />
                        {article.viewCounter}
                    </span>
                </div>
            </div>
        </div>
    )
}