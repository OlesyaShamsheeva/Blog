import {configureStore} from "@reduxjs/toolkit"
import { setupListeners } from '@reduxjs/toolkit/query';
import { articleApi } from './article/article.api';
import { articleReducer } from './article/acticle.slice';
import {userApi} from './users/user.api';
import {userReducer} from './users/user.slice';

export const store= configureStore({
  reducer: {
    [articleApi.reducerPath]: articleApi.reducer, article: articleReducer,
    [userApi.reducerPath]: userApi.reducer, user: userReducer,
  },
  // middleware:(getDefaultMiddleware=> getDefaultMiddleware().concat(articleApi)
})

export const RootState=store.getState()

setupListeners(store.dispatch)