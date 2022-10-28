import { useNavigate } from 'react-router-dom';

import { Routes } from '../../../constants';
import styles from './NavAction.module.css'

export const NavAction = ( { isHeader } ) => {
  const navigate = useNavigate()

  return (
    <div className={styles.button}>
      <button className={(isHeader) ? styles.button_white : styles.button_black}
              onClick={() => navigate(Routes.AUTHORIZATION)}>
        Log in
      </button>
      <button className={(isHeader) ? styles.button_black : styles.button_black_footer}
              onClick={() => navigate(Routes.REGISTRATION)}>
        Sign in
      </button>
    </div>

  )
}