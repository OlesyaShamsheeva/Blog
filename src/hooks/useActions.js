import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import {articleActions} from '../store/article/acticle.slice';
import { userActions } from '../store/users/user.slice';

const allActions={
  ...articleActions,
  ...userActions
}

export const useActions=()=>{
  const dispatch=useDispatch()
  return bindActionCreators(allActions,dispatch)
}