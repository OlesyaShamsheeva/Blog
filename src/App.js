import './App.css';
import { Route, Routes } from 'react-router-dom';
import { createContext, useState } from 'react';
import { MainContainer } from './components/MainContainer/MainConteiner';

import { RegistrationUser } from './pages/RegistrationUser';
import { AuthorizationUser } from './pages/AuthorizationUser';
import { AllArticles } from './pages/AllArticles';
import { MyArticles } from './pages/MyArticles';
import { ArticleDetails } from './pages/ArticleDetails';
import { Profile } from './pages/Profile';
import { AddArticle } from './pages/AddArticle/AddArticle';


export const MyContext = createContext()

function App() {
  const [isAuth, setIsAuth] = useState(!!localStorage.getItem('token'))
  const [user, setUser] = useState({})
  const [article, setArticle] = useState([])

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
        <Routes>
          <Route path="/all-articles" element={<MainContainer>
            <AllArticles/>
          </MainContainer>}/>
          <Route path="/my-articles" element={<MainContainer>
            <MyArticles/>
          </MainContainer>}/>
          <Route path="/add-article" element={<MainContainer>
            <AddArticle/>
          </MainContainer>}/>
          <Route path="/profile" element={<MainContainer>
            <Profile/>
          </MainContainer>}/>
          <Route path="/registration" element={<MainContainer><RegistrationUser/></MainContainer>}/>
          <Route path="/authorization" element={<MainContainer><AuthorizationUser/></MainContainer>}/>
          <Route path="/article/:articleId" element={<MainContainer><ArticleDetails/></MainContainer>}/>
        </Routes>
      </div>
    </MyContext.Provider>
  );
}

export default App;