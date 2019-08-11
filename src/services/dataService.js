import { APIKey } from "../utils/constants";
import { lang } from "../utils/constants";

export const getPopularMovies = (page = 1) => {
    const urlString = `https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=${lang}&page=${page}`;

    return fetch(urlString)
        .then(response => response.json())
        .catch(error => console.error(error));
};

export const getSimilarMovies = (page = 1, movieId) => {
    const urlString = `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${APIKey}&language=${lang}&page=${page}`;

    return fetch(urlString)
        .then(response => response.json())
        .catch(error => console.error(error));
};

export const searchMovies = (page = 1, searchPhrase = "") => {
    const urlString = `https://api.themoviedb.org/3/search/movie?query=${searchPhrase}&page=${page}&language=${lang}&api_key=${APIKey}`;

    return fetch(urlString)
        .then(response => response.json())
        .catch(error => console.error(error));
};

export const getGenresList = () => {
    const urlString = `https://api.themoviedb.org/3/genre/movie/list?api_key=${APIKey}&language=${lang}`;

    return fetch(urlString)
        .then(response => response.json())
        .catch(error => console.error(error));
};

export const getMovieById = id => {
    const urlString = `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=${lang}`;

    return fetch(urlString)
        .then(response => response.json())
        .catch(error => console.error(error));
};
