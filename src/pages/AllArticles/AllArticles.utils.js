import {  useEffect, useState } from 'react';

import { usePagination } from '../../hook/usePagination';
import { getAllArticles } from '../../http/articleApi';
import { useGetArticlesQuery } from '../../store/article/article.api';

export const useAllArticles = () => {
  const { data: articles, isLoading, error } = useGetArticlesQuery(6)
  const [popularArticle, setPopularArticle] = useState(null);
  const { firstContentIndex, lastContentIndex, nextPage, prevPage } =
    usePagination({
      contentPerPage: 3,
      count: articles?.length,
    });
  useEffect(() => {
    const handleGetArticles = async () => {
      const { data } = await getAllArticles();
      const newData = [...data];
      newData.sort((a, b) => b.viewCounter - a.viewCounter);
      setPopularArticle(newData[0]);
    };
    handleGetArticles();
  }, []);

  return {
    popularArticle,
    articles,
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    isLoading,
    error,
  }


}

