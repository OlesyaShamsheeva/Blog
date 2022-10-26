import { useState, useEffect, useContext } from 'react';
import { usePagination } from '../../hook/usePagination';
import { NotArticles } from '../../components/Article/NoArticle';
import { Pagination } from '../../components/Pagination';
import { Article } from '../../components/Article';

import { getAllArticles } from '../../http/articleApi';
import { MyContext } from '../../App';
import styles from './AllArticles.module.css';

export const AllArticles = ({}) => {
  const { article, setArticle } = useContext(MyContext)

  const [popularArticle, setPopularArticle] = useState(null);
  const [state, setState] = useState([])

  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
  } = usePagination({
    contentPerPage: 6,
    count: article.length,
  });

  const handleGetArticles = async () => {
    const { data } = await getAllArticles();
    setArticle(data);
    if (data) {
      setPopularArticle(
        data.reduce(
          (result, article) =>
            result.viewCounter > article.viewCounter ? result : article,
          { viewCounter: -1, }));
    }
  };

  useEffect(() => {
    handleGetArticles();
  }, []);

  useEffect(() => {
    if (article && popularArticle) {
      const filtered = article.filter(
        (article) => article._id !== popularArticle._id
      );
      setState(filtered)
    }
  }, [article, popularArticle]);

  return (
    <div>
      {popularArticle?.viewCounter >= 0 && (
        <Article isBigImg article={popularArticle}/>
      )}
      {state.length > 0 ? (
        <h3 className={styles.title}> Popular Articles</h3>
      ) : (
        ''
      )}
      <div>
        {state.length > 0 ? (
          state.slice(firstContentIndex, lastContentIndex).map((article) => (
            <Article key={article._id} article={article}/>
          ))
        ) : (
          <NotArticles/>
        )}
      </div>
      <div className={styles.pagBtn}>
         <span>
           {state?.length > 0 && <button className={styles.pag} onClick={prevPage}>
             Prev
           </button>}
         </span>
        <span>
          {state?.length > 0 &&
            <button className={styles.pag} onClick={nextPage}>
              Next
            </button>
          }
        </span>
      </div>
    </div>
  );
};
