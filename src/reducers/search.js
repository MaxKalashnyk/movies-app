import {
    REQUEST_SEARCH,
    REQUEST_SUCCESS_SEARCH,
    REQUEST_FAIL_SEARCH
} from "../actions/searchMovies";

export const initialState = {
    moviesData: null,
    isFetching: false
};

export function searchReducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST_SEARCH:
            return { ...state, isFetching: true };
        case REQUEST_SUCCESS_SEARCH:
            return {
                ...state,
                isFetching: false,
                moviesData: action.payload
            };
        case REQUEST_FAIL_SEARCH:
            return {
                ...state,
                isFetching: false,
                moviesData: null
            };
        default:
            return state;
    }
}
