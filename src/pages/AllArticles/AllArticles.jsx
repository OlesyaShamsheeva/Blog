import {Article} from "../../components/Article";
import {Pagination} from "../../components/Pagination/";

import {allArticles} from "../../mock";
import styles from "./AllArticles.module.css"

export const AllArticles = () => {
  const articles = JSON.parse(localStorage.getItem("Articles")) || []
  const popularArticle = articles.reduce((result, article) => (
      result.viewCounter > article.viewCounter ? result : article
  ))

  const filteredArticles = articles.filter((article) => article.id !== popularArticle.id)
  return (
      <div>
        <Article isBigImg article={popularArticle}/>
        <h3 className={styles.title}>Popular Articles</h3>
        {filteredArticles.map((article) => (
            <Article key={article.id} article={article}/>
        ))}
        <Pagination/>
      </div>
  )
}
