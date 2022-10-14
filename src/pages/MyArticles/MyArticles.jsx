import {useContext} from "react";

import {Pagination} from "../../components/Pagination";
import {Article} from "../../components/Article/";

import styles from "./MyArticles.module.css"
import avatar from "../../assets/imgs/avatar.png"
import {allArticles} from "../../mock";
import {MyContext} from "../../App";
import {NavLink} from "react-router-dom";
import {NotArticles} from "../../components/Article/NoArticle";
import noPhoto from "../../assets/imgs/noPhoto.svg";
import {PhotoUser} from "../../components/PhotoUser";

export const MyArticles = ({bigAvatar = false}) => {
  const {user} = useContext(MyContext)
  const articles = JSON.parse(localStorage.getItem("Articles")) || []
  const userArticles = articles.filter((article) => article.userId === user.id)
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