
import {useNavigate} from "react-router-dom";
import styles from "./Logo.module.css"

export const Logo = ({logo}) => {
  const navigate = useNavigate()
  const goMainPage = () => {
    navigate("/all-articles")
  }
  return <div>
    <img onClick={goMainPage} src={logo} className={styles.logo} alt=""/>
  </div>
}