import { Link } from 'react-router-dom';

import { Routes } from '../../../constants';
import styles from './Logo.module.css'


export const Logo = ({ logo }) => {
  return <Link to={Routes.ALL_ARTICLES}>
    <img src={logo} className={styles.logo} alt=""/>
  </Link>
}