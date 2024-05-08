import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { gamesApi } from "../features /games/api/gamesApi";

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(gamesApi.middleware),

});

setupListeners(store.dispatch);

export default store;
