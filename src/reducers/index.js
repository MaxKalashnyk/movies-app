import { combineReducers } from "redux";
import { moviesReducer } from "./movies";
// import { genresReducer } from "./genres";

export const rootReducer = combineReducers({
    movies: moviesReducer
    // genres: genresReducer
});
