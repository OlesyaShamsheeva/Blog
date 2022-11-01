import { useState } from 'react';

import { Routes } from '../../../constants'

export const useMenu = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      value: 'All articles',
      path: Routes.ALL_ARTICLES,
    },
    {
      id: 2,
      value: 'My articles',
      path: Routes.MY_ARTICLES,
    },
    {
      id: 3,
      value: 'Add article',
      path: Routes.ADD_ARTICLE,
    },
    {
      id: 4,
      value: 'Profile',
      path: Routes.PROFILE,
    },
  ];
  return {
    nav,
    setNav,
    links,
  }

}
