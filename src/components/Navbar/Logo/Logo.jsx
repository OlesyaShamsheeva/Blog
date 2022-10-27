import { useNavigate } from 'react-router-dom';
import styles from './Logo.module.css'

export const Logo = ({ logo }) => {
  const navigate = useNavigate()
  const goMainPage = () => {
    navigate('/all-articles')
  }
  return <a>
    <img onClick={goMainPage} src={logo} className={styles.logo} alt=""/>
  </a>
}