import {useNavigate, useParams} from "react-router-dom";

import {ImgArticle} from "../../components/Article/imgArticle/ImgArticle";
import {allArticles} from "../../mock";

import art from "../../assets/imgs/1art.png"
import styles from "./ArticleDetails.module.css"
import glass from "../../assets/imgs/glass.png";
import {useState} from "react";


export const ArticleDetails = () => {
    const navigate = useNavigate()
    const { articleId } = useParams();
  const articles = JSON.parse(localStorage.getItem("Articles")) || []
    const article = articles.find(article => Number(articleId) === article.id)

    return (
        <div className={styles.wrapper}>
            <button className={styles.button} onClick={() => navigate("/all-articles")}>All articles</button>
            <div>
                <div className={styles.tagEl}> {article.category}</div>
                <h4 className={styles.caption}>{article.title}</h4>
                  <ImgArticle url={article.url} isBigImg/>
                <div className={styles.textContent}>
                    {article.description}
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
                      {article.category}
                    </button>
                </div>
            </div>
        </div>
    )
}
