import { useContext } from 'react';

import { Logo } from './Logo';
import { Menu } from './Menu';
import { NavAction } from './NavAction';

import { MyContext } from '../../App';
import { useNavigate } from 'react-router-dom';

export const Navbar = ({ logo, isHeader }) => {
  const { isAuth, setIsAuth } = useContext(MyContext)
  const navigate = useNavigate()
  const logOut = () => {
    setIsAuth(false)
    navigate('/all-articles')
    localStorage.removeItem('token')
  }

  return (
    <>
      <Logo logo={logo}/>
      {isAuth ? (
        <Menu isHeader={isHeader} logOut={logOut}/>
      ) : (
        <NavAction isHeader={isHeader} auth={() => setIsAuth(true)}/>
      )
      }
    </>
  )
}