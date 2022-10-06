import {useContext, useState} from "react";

import {Logo} from "./Logo";
import {Menu} from "./Menu";
import {NavAction} from "./NavAction";
import {MyContext} from "../../App";

export const Navbar = ({logo,isHeader}) => {
    const { isAuth, setIsAuth } = useContext(MyContext)

    return (
        <>
            <Logo logo={logo}/>
            {isAuth ? (
                    <Menu  isHeader={isHeader} logOut={() => setIsAuth(false)}/>
                ) : (
                    <NavAction isHeader={isHeader} auth={() => setIsAuth(true)}/>
                )
            }
        </>
    )
}