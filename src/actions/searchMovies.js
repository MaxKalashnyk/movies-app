import { searchMovies } from "../services/dataService";

export const REQUEST_SEARCH = "REQUEST";
export const REQUEST_SUCCESS_SEARCH = "REQUEST_SUCCESS";
export const REQUEST_FAIL_SEARCH = "REQUEST_FAIL";

export const getMoviesSearchAction = (
    page = 1,
    searchPhrase = ""
) => dispatch => {
    dispatch({
        type: REQUEST_SEARCH
    });

    searchMovies(page, searchPhrase)
        .then(data => {
            dispatch({
                type: REQUEST_SUCCESS_SEARCH,
                payload: data
            });
        })
        .catch(err => {
            dispatch({
                type: REQUEST_FAIL_SEARCH,
                payload: err,
                error: true
            });
        });
};
