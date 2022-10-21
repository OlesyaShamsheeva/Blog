import { authHost, host } from "./index";
import jwt_decode from "jwt-decode";

//получить все статьи
export const allArticles= async (
    articles
) => {
  const data = await authHost.get("/api/article/allArticles",{
   articles
  });
  return data;
};




export const addArticle= async (
   article
) => {
  const data1 = await authHost.post("/api/article/addArticle",{
   ...article
  });
  return data1;
};


