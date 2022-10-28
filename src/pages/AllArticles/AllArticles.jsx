import { useState, useEffect, useContext } from 'react';
import { usePagination } from '../../hook/usePagination';

import { NotArticles } from '../../components/Article/NoArticle';
import { Article } from '../../components/Article';
import { Pagination } from '../../components/Pagination';

import { getAllArticles } from '../../http/articleApi';
import { MyContext } from '../../App';
import styles from './AllArticles.module.css';


export const AllArticles = () => {

  const { article, setArticle } = useContext(MyContext)

  const [popularArticle, setPopularArticle] = useState(null);

  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
  } = usePagination({
    contentPerPage: 6,
    count: article.length,
  });

  useEffect(() => {
    const handleGetArticles = async () => {
      const { data } = await getAllArticles();
      const newData = [...data];
      newData.sort((a, b) => b.viewCounter - a.viewCounter);
      setPopularArticle(newData[0]);
    }
 handleGetArticles()
  }, []);

  useEffect(() => {
    if (article && popularArticle) {
      const filtered = article.filter(
        (article) => article._id !== popularArticle._id
      );
      setArticle(filtered)
    }
  }, [popularArticle]);

  return (
    <div>
      {popularArticle?.viewCounter >= 0 && (
        <Article isBigImg article={popularArticle}/>
      )}
      {article.length > 0 ? (
        <h3 className={styles.title}> Popular Articles</h3>
      ) : (
        ''
      )}
      <div>
        {article.length > 0 ? (
          article.slice(firstContentIndex, lastContentIndex).map((article) => (
            <Article key={article._id} article={article}/>
          ))
        ) : (
          <NotArticles/>
        )}
      </div>
      {article.length > 0 ? <Pagination next={nextPage} prev={prevPage} />:""}
    </div>
  );
};
