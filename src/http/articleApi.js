import { authHost, host } from './index';

export const getAllArticles = async () => {
  const data = await authHost.get('http://localhost:5000/api/article/allArticles', {
    headers: {
      Authorization: localStorage.getItem('token'),
      'content-type': 'application/json'
    }
  })
  return data
}

export const addArticle = async (
  article
) => {
  const { data } = await authHost.post('/api/article/addArticle', {
    ...article
  });
  localStorage.setItem('article', JSON.stringify(data.articleAdd));
  return data.articleAdd;
};

export const detailArticle = async (articleId) => {
  const { data } = await authHost.get(`api/article/1/${articleId}`);
  return data;
};

export const myArticleId = async (userId) => {
  const { data } = await authHost.get(`api/article/2/${userId}`);
  return data;
};

export const updateArticle = async (data) => {
  const data3 = await authHost.patch(`api/article/${data._id}`, data);
  return data3;
};

