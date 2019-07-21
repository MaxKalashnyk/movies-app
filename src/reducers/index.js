import { combineReducers } from "redux";
import { popularMoviesReducer } from "./popularMovies";

export const rootReducer = combineReducers({
    popularMovies: popularMoviesReducer
});
