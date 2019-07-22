import { combineReducers } from "redux";
import { moviesReducer } from "./movies";

export const rootReducer = combineReducers({
    movies: moviesReducer
});
