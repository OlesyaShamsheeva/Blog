import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query';
import { articleApi } from './article/article.api';
import { articleReducer } from './article/acticle.slice';
import {authApi} from './auth/auth.api';
import { authReducer } from './auth/auth.slice';

export const store= configureStore({
  reducer: {
    [articleApi.reducerPath]: articleApi.reducer, article: articleReducer,
    [authApi.reducerPath]: authApi.reducer, user:authReducer,
  },
  middleware:getDefaultMiddleware => getDefaultMiddleware().concat(articleApi.middleware)
})

export const RootState=store.getState()

setupListeners(store.dispatch)
