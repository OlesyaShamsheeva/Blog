import {MyContext} from "../../App";
import {useContext,useEffect} from "react";

import {Pagination} from "../../components/Pagination";
import {Article} from "../../components/Article/";
import {NotArticles} from "../../components/Article/NoArticle";
import {PhotoUser} from "../../components/PhotoUser";

import {myArticleId} from "../../http/articleApi";
import styles from "./MyArticles.module.css"

export const MyArticles = ({bigAvatar = false}) => {
  const [article,setArticle]=useContext(MyContext)
  const [user,setUser]=useContext(MyContext)

  const userArticles = article.filter((article) => article.userId === user.id)
  useEffect(() => {
    const data =  myArticleId(user.id)
  }, [])
  return (
      <div>
        <div className={styles.myArticles}>
          <div className={styles.profile}>
            <PhotoUser photo={user.avatar} bigAvatar={bigAvatar} isBigAvatar/>
            <div className={styles.name}>{user.firstName}</div>
            <div className={styles.text}> Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed
              arcu.
            </div>
          </div>
          <div>
            {(userArticles.length > 0) ? (userArticles.map((article) => (
                <Article isVertical isBigImg key={article.id} article={article}/>
            ))) : <NotArticles/>}
            {userArticles?.length > 0 && <Pagination/>}
          </div>
        </div>
      </div>
  )
}