import './App.css';
import {createContext, useState} from "react";
import {MainContainer} from "./components/MainContainer/MainConteiner";
import {Route, Routes} from "react-router-dom";
import {RegistrationUser} from "./pages/RegistrationUser";
import {AuthorizationUser} from "./pages/AuthorizationUser";
import {AllArticles} from "./pages/AllArticles";
import {MyArticles} from "./pages/MyArticles";
import {ArticleDetails} from "./pages/ArticleDetails";
import {Profile} from "./pages/Profile";

export const MyContext = createContext(null)

function App() {
    const [isAuth, setIsAuth] = useState(false)
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

    const providerValues = {
        isAuth,
        setIsAuth,
        user,
        setUser,
    }

    return (
        <MyContext.Provider value={providerValues}>
            <div className="App">
                <Routes>
                    <Route path='/all-articles' element={<MainContainer>
                       <AllArticles/>
                    </MainContainer>}/>
                    <Route path='/my-articles' element={<MainContainer>
                      <MyArticles/>
                    </MainContainer>}/>
                    <Route path='/add-article' element={<MainContainer>
                        <div>333</div>
                    </MainContainer>}/>
                    <Route path='/profile' element={<MainContainer>
                        <Profile/>
                    </MainContainer>}/>
                    <Route path='/registration' element={<MainContainer><RegistrationUser/></MainContainer>}/>
                    <Route path='/authorization' element={<MainContainer><AuthorizationUser/></MainContainer>}/>
                    <Route path="/article/:articleId" element={<MainContainer><ArticleDetails/></MainContainer>}/>
                </Routes>

            </div>
        </MyContext.Provider>
    );
}

export default App;