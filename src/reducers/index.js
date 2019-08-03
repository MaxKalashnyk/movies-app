import { combineReducers } from "redux";
import { moviesReducer } from "./movies";
import { genresReducer } from "./genres";
import { pageReducer } from "./page";

export const rootReducer = combineReducers({
    movies: moviesReducer,
    genres: genresReducer,
    page: pageReducer
});
