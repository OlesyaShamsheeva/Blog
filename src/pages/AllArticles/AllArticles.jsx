
import {MyContext} from "../../App";
import {useState,useEffect,useContext} from "react";

import {NotArticles} from "../../components/Article/NoArticle";

import {Pagination} from "../../components/Pagination";

import {getAllArticles} from "../../http/articleApi"

import styles from "./AllArticles.module.css"
import {Article} from "../../components/Article";

export const AllArticles = () => {
  const [allState, setAllState] = useState([])
  const [article,setArticle]=useState([])

  const [popularArticle, setPopularArticle] = useState(null)

  useEffect(() => {
    if (article) {
      setPopularArticle(article.reduce((result, article) =>
          result.viewCounter > article.viewCounter ? result : article, {
        viewCounter: -1
      }))
    }
    console.log('hjefgjk');
    getAllArticles()
  }, [])



  const filteredArticles = article.filter((article) => article.id !== popularArticle?.id)
  return (
      <div>
        {popularArticle?.viewCounter >= 0 && <Article isBigImg article={popularArticle}/>}
        {(filteredArticles.length > 0)?<h3 className={styles.title}> Popular Articles</h3>:""}
        {(filteredArticles.length > 0) ?
            filteredArticles.map((article) => (<Article key={article.id} article={article}/>
            )):<NotArticles/>}
        {filteredArticles?.length > 0 && <Pagination/>}
      </div>
  )
}

