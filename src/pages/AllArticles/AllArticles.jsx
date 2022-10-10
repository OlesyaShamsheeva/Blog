
import styles from "./AllArticles.module.css"
import {allArticles} from "../../mock";
import {Article} from "../../components/Article/Article";

export const AllArticles = ({}) => {
    const popularArticle = allArticles.reduce((result, article) => (
        result.viewCounter > article.viewCounter ? result : article
    ))
    return (
        <div>
            <Article isBigImg article={popularArticle}/>
            <h3 className={styles.title}>Popular Articles</h3>
            {allArticles.map((article) => (
                <Article key={article.id} article={article} />
            ))}
            <div className={styles.buttons}>
                <button className={styles.button}>Prev</button>
                <button className={styles.button}>Next</button>
            </div>
        </div>
    )
}
