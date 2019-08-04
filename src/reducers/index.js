import { combineReducers } from "redux";
import { moviesReducer } from "./movies";
import { genresReducer } from "./genres";
import { pageReducer } from "./page";
import { movieDetailsReducer } from "./movieById";

export const rootReducer = combineReducers({
    movies: moviesReducer,
    genres: genresReducer,
    page: pageReducer,
    movieDetails: movieDetailsReducer
});
