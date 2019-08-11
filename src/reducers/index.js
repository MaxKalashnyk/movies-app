import { combineReducers } from "redux";
import { moviesReducer } from "./movies";
import { genresReducer } from "./genres";
import { pageReducer } from "./page";
import { movieDetailsReducer } from "./movieById";
import { searchReducer } from "./search";
import { searchPhraseReducer } from "./searchPhrase";

export const rootReducer = combineReducers({
    movies: moviesReducer,
    genres: genresReducer,
    page: pageReducer,
    movieDetails: movieDetailsReducer,
    searchMovies: searchReducer,
    searchPhrase: searchPhraseReducer
});
