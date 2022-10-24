import { authHost, host } from "./index";
import jwt_decode from "jwt-decode";

//получить все статьи
export const getAllArticles= async () => {
  const data = await authHost.get("/api/article/allArticles");
  return data;
};




export const addArticle= async (
   article
) => {
  const {data} = await authHost.post("/api/article/addArticle",{
   ...article
  });
  localStorage.setItem("article", data.articleAdd);
  return data.articleAdd;

};


export const detailArticle= async (articleId) => {
  const {data1} = await authHost.get(`api/article/${articleId}`);
  return jwt_decode(data1.token);
};

export const myArticleId= async (userId) => {
  const {data1} = await authHost.get(`api/article/${userId}`);
  console.log(data1.token)
  return jwt_decode(data1.token);
};
