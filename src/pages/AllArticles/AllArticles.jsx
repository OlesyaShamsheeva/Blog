import {useContext, useEffect, useState} from "react";
import {Article} from "../../components/Article";

import styles from "./AllArticles.module.css"
import {MyContext} from "../../App";
import {NotArticles} from "../../components/Article/NoArticle";
import {Pagination} from "../../components/Pagination";



export const AllArticles = () => {
  const {articles} = useContext(MyContext)
  const [popularArticle, setPopularArticle] = useState(null)

  useEffect(() => {
    if (articles) {
      setPopularArticle(articles.reduce((result, article) =>
          result.viewCounter > article.viewCounter ? result : article, {
        viewCounter: -1
      }))
    }
  }, [])


  const filteredArticles = articles.filter((article) => article.id !== popularArticle?.id)
  return (
      <div>
        {popularArticle?.viewCounter >= 0 && <Article isBigImg article={popularArticle}/>}
        {(filteredArticles.length > 0)?<h3 className={styles.title}> Popular Articles</h3>:""}
        {(filteredArticles.length > 0) ?
            filteredArticles.map((article) => (<Article key={article.id} article={article}/>
            )):<NotArticles/>}
        {filteredArticles?.length > 0 && <Pagination/> }

      </div>
  )
}

