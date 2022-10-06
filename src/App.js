import './App.css';
import {createContext, useState} from "react";
import {MainContainer} from "./components/MainContainer/MainConteiner";
import {Route, Routes} from "react-router-dom";

export const MyContext = createContext(null)

function App() {
    const [isAuth, setIsAuth] = useState(false)

    const providerValues = {
        isAuth,
        setIsAuth,
    }

    return (
        <MyContext.Provider value={providerValues}>
            <div className="App">
                <Routes>
                    <Route path='/all-articles' element={<MainContainer>
                        <div>1111</div>
                    </MainContainer>}/>
                    <Route path='/my-articles' element={<MainContainer>
                        <div>222</div>
                    </MainContainer>}/>
                    <Route path='/add-article' element={<MainContainer>
                        <div>333</div>
                    </MainContainer>}/>
                    <Route path='/profile' element={<MainContainer>
                        <div>444</div>
                    </MainContainer>}/>
                </Routes>
            </div>
        </MyContext.Provider>
    );
}

export default App;