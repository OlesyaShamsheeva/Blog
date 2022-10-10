import {Article} from "../../components/Article/Article";
import {Pagination} from "../../components/Pagination/Pagination";

import {allArticles} from "../../mock";
import styles from "./AllArticles.module.css"

export const AllArticles = () => {
    const popularArticle = allArticles.reduce((result, article) => (
        result.viewCounter > article.viewCounter ? result : article
    ))
    const filteredArticles = allArticles.filter((article) => article.id !== popularArticle.id)

    return (
        <div >
            <Article isBigImg article={popularArticle}/>
            <h3 className={styles.title}>Popular Articles</h3>
            {filteredArticles.map((article) => (
                <Article key={article.id} article={article} />
            ))}
          <Pagination/>
        </div>
    )
}
