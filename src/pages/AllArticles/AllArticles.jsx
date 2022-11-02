import { NotArticles } from '../../components/Article/NoArticle';
import { Article } from '../../components/Article';
import { Pagination } from '../../components/Pagination';

import { useAllArticles } from './AllArticles.utils';
import styles from './AllArticles.module.css';

export const AllArticles = () => {
  const {
    popularArticle,
    articles,
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    isLoading,
    error
  } = useAllArticles()


  return (
    <div>
      {popularArticle?.viewCounter >= 0 && (
        <Article isBigImg article={popularArticle}/>
      )}
      {articles?.length > 0 ? (
        <h3 className={styles.title}> Popular Articles</h3>
      ) : (
        ''
      )}
      <div>
        {isLoading ? ('Loading...') : error ? (<div>{error}</div>) :
          (articles?.length > 0 ? (
            articles
              .slice(firstContentIndex, lastContentIndex)
              .map((article) => <Article key={article._id} article={article}/>)
          ) : (
            <NotArticles/>
          ))}
      </div>
      {articles?.length > 0 ? <Pagination next={nextPage} prev={prevPage}/> : ''}
    </div>
  );
};
