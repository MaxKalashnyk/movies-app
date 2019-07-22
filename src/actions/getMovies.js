import { getPopularMovies } from "../services/dataService";

export const REQUEST = "REQUEST";
export const REQUEST_SUCCESS = "REQUEST_SUCCESS";
export const REQUEST_FAIL = "REQUEST_FAIL";

export const getMoviesAction = (page = 1) => dispatch => {
    dispatch({
        type: REQUEST
    });

    getPopularMovies(page)
        .then(data => {
            dispatch({
                type: REQUEST_SUCCESS,
                payload: data
            });
        })
        .catch(err => {
            dispatch({
                type: REQUEST_FAIL,
                payload: err,
                error: true
            });
        });
};
