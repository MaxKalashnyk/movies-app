import {
    REQUESTBYID,
    REQUESTBYID_SUCCESS,
    REQUESTBYID_FAIL
} from "../actions/getMovieById";

export const initialState = {
    movieDetails: null,
    isFetching: false
};

export function movieDetailsReducer(state = initialState, action) {
    switch (action.type) {
        case REQUESTBYID:
            return { ...state, isFetching: true };
        case REQUESTBYID_SUCCESS:
            return {
                ...state,
                isFetching: false,
                movieDetails: action.payload
            };
        case REQUESTBYID_FAIL:
            return {
                ...state,
                isFetching: false,
                movieDetails: null
            };
        default:
            return state;
    }
}
