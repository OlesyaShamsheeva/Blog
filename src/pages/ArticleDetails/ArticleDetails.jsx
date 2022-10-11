import {useNavigate, useParams} from "react-router-dom";

import {ImgArticle} from "../../components/Article/imgArticle/ImgArticle";
import {allArticles} from "../../mock";

import art from "../../assets/imgs/1art.png"
import styles from "./ArticleDetails.module.css"
import glass from "../../assets/imgs/glass.png";


export const ArticleDetails = () => {
    const navigate = useNavigate()
    const { articleId } = useParams();

    const article = allArticles.find(article => Number(articleId) === article.id)

    return (
        <div className={styles.wrapper}>
            <button className={styles.button} onClick={() => navigate("/all-articles")}>All articles</button>
            <div>
                <div className={styles.tagEl}> #Typography</div>
                <h4 className={styles.caption}>{article.title}</h4>
                  <ImgArticle url={art} isBigImg/>
                <div className={styles.textContent}>
                    {article.text}
                </div>
                <div className={styles.wrap}>
                    <div className={styles.inform}>
                        <img className={styles.ava} alt="User avatar"/>
                        <span className={styles.name}>
                       {article.user}
                    </span>
                        <span className={styles.data}>
                        {article.data}
                    </span>
                        <span className={styles.view}>
                    <img src={glass} className={styles.icon} alt="Counter icon"/>
                            {article.viewCounter}
                    </span>
                    </div>
                    <button className={styles.buttonTag}>
                        Typography
                    </button>
                </div>
            </div>
        </div>
    )
}
