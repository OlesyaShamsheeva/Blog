import { NotArticles } from '../../components/Article/NoArticle';
import { Article } from '../../components/Article';
import { Pagination } from '../../components/Pagination';

import { useAllArticles } from './AllArticles.utils';
import styles from './AllArticles.module.css';


export const AllArticles = () => {
  const {
    popularArticle,
    article,
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage
  } = useAllArticles()

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
          article
            .slice(firstContentIndex, lastContentIndex)
            .map((article) => <Article key={article._id} article={article}/>)
        ) : (
          <NotArticles/>
        )}
      </div>
      {article.length > 0 ? <Pagination next={nextPage} prev={prevPage}/> : ''}
    </div>
  );
};
