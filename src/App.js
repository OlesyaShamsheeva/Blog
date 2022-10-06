import './App.css';
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {createContext, useState} from "react";

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
                <Header />
                <Footer />
            </div>
        </MyContext.Provider>
    );
}

export default App;
