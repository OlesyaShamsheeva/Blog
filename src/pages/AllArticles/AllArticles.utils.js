import { useContext, useEffect, useState } from 'react';

import { MyContext } from '../../App';
import { usePagination } from '../../hook/usePagination';
import { getAllArticles } from '../../http/articleApi';

export const useAllArticles = () => {
  const { article, setArticle } = useContext(MyContext);
  const [popularArticle, setPopularArticle] = useState(null);

  const { firstContentIndex, lastContentIndex, nextPage, prevPage } =
    usePagination({
      contentPerPage: 3,
      count: article.length,
    });

  useEffect(() => {
    const handleGetArticles = async () => {
      const { data } = await getAllArticles();
      const newData = [...data];
      newData.sort((a, b) => b.viewCounter - a.viewCounter);
      setPopularArticle(newData[0]);
      setArticle(
        newData
          .filter((article) => article._id !== newData[0]._id)
      );
    };
    handleGetArticles();
  }, []);

  return {
    popularArticle,
    article,
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage
  }


}

