import styles from "./MyArticles.module.css"
import avatar from "../../assets/imgs/avatar.png"
import {allArticles} from "../../mock";
import {Article} from "../../components/Article/Article";
import {useContext} from "react";
import {MyContext} from "../../App";
import {Pagination} from "../../components/Pagination/Pagination";

export const MyArticles = () => {
    const { user } = useContext(MyContext)
    const userArticles = allArticles.filter((article) => article.userId === user.id)

    console.log(userArticles)
    return (
        <div>
        <div className={styles.myArticles}>
            <div className={styles.profile}>
                <img src={avatar} className={styles.img} alt="avatar"/>
                <div className={styles.name}>{user.firstName}</div>
                <div className={styles.text}> Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed
                    arcu.
                </div>
            </div>
            <div>
                {userArticles.map((article) => (
                    <Article isVertical isBigImg key={article.id} article={article}  />
                ))}
                <Pagination/>
            </div>
        </div>

    </div>
    )

}