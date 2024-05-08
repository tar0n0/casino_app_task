import { combineReducers } from '@reduxjs/toolkit';
import gameList from "../components/gameList";
import filterReducer from '../features /filter/filterSlice'

const rootReducer = combineReducers({
    games: gameList,
    filter: filterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
