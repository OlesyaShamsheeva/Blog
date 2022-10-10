import styles from "./Article.module.css"

import glass from "../../assets/imgs/glass.png"
import {ImgArticle} from "./imgArticle/ImgArticle";

export const Article = ({article, isBigImg = false}) => {
    return (
        <div className={styles.wrapper}>
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
                    <img className={styles.ava}/>
                    <span className={styles.name}>{article.user}</span>
                    <span className={styles.data}>{article.data}  </span>
                    <span className={styles.view}>
                    <img src={glass} className={styles.icon}></img>
                        {article.viewCounter}
                    </span>
                </div>
            </div>
        </div>
    )
}