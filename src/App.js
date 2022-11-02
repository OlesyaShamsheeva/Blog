import { Navigate, Route, Routes as Switch } from 'react-router-dom';
import { createContext, useState } from 'react';

import { MainContainer } from './components/MainContainer/MainConteiner';
import { RegistrationUser } from './pages/RegistrationUser';
import { AuthorizationUser } from './pages/AuthorizationUser';
import { AllArticles } from './pages/AllArticles';
import { MyArticles } from './pages/MyArticles';
import { ArticleDetails } from './pages/ArticleDetails';
import { Profile } from './pages/Profile';
import { AddArticle } from './pages/AddArticle/AddArticle';

import { Routes } from './constants';
import './App.css';
import { useGetArticlesQuery } from './store/article/article.api';

export const MyContext = createContext()

function App() {
  const [isAuth, setIsAuth] = useState(!!localStorage.getItem('token'))
  const [user, setUser] = useState({})
  const [article, setArticle] = useState([])
  const renderPrivateComponent = (component) => (
    isAuth ? (
      <MainContainer>
        {component}
      </MainContainer>
    ) : (
      <Navigate to={Routes.AUTHORIZATION}/>
    )
  )

  return (
    <MyContext.Provider value={{
      isAuth,
      setIsAuth,
      user,
      setUser,
      article,
      setArticle,
    }}>
      <div className="App">
        <Switch>
          <Route path={Routes.UNKNOWN} element={<Navigate to={Routes.ALL_ARTICLES}/>}/>
          <Route path={Routes.REGISTRATION} element={<MainContainer><RegistrationUser/></MainContainer>}/>
          <Route path={Routes.AUTHORIZATION} element={<MainContainer><AuthorizationUser/></MainContainer>}/>
          <Route path={Routes.ALL_ARTICLES} element={<MainContainer>
            <AllArticles/>
          </MainContainer>}/>
          <Route path={Routes.MY_ARTICLES} element={renderPrivateComponent(<MyArticles/>)}/>
          <Route path={Routes.ADD_ARTICLE} element={renderPrivateComponent(<AddArticle/>)}/>
          <Route path={Routes.PROFILE} element={renderPrivateComponent(<Profile/>)}/>
          <Route path={Routes.ARTICLE_DETAIL} element={renderPrivateComponent(<ArticleDetails/>)}/>
        </Switch>
      </div>
    </MyContext.Provider>
  );
}

export default App;