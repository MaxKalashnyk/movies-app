import { getMovieById } from "../services/dataService";

export const REQUESTBYID = "REQUESTBYID";
export const REQUESTBYID_SUCCESS = "REQUESTBYID_SUCCESS";
export const REQUESTBYID_FAIL = "REQUESTBYID_FAIL";

export const getMoviesAction = id => dispatch => {
    dispatch({
        type: REQUESTBYID
    });

    getMovieById(id)
        .then(data => {
            dispatch({
                type: REQUESTBYID_SUCCESS,
                payload: data
            });
        })
        .catch(err => {
            dispatch({
                type: REQUESTBYID_FAIL,
                payload: err,
                error: true
            });
        });
};
