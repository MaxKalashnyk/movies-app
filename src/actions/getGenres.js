import { getGenresList } from "../services/dataService";

export const REQUEST1 = "REQUEST1";
export const REQUEST_SUCCESS1 = "REQUEST_SUCCESS1";
export const REQUEST_FAIL1 = "REQUEST_FAIL1";

export const getGenresAction = () => dispatch => {
    dispatch({
        type: REQUEST1
    });

    getGenresList()
        .then(data => {
            dispatch({
                type: REQUEST_SUCCESS1,
                payload: data
            });
        })
        .catch(err => {
            dispatch({
                type: REQUEST_FAIL1,
                payload: err,
                error: true
            });
        });
};
