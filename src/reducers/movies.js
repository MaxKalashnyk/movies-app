import { REQUEST, REQUEST_SUCCESS, REQUEST_FAIL } from "../actions/getMovies";

export const initialState = {
    moviesData: null,
    isFetching: false
};

export function moviesReducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST:
            return { ...state, isFetching: true };
        case REQUEST_SUCCESS:
            return {
                ...state,
                isFetching: false,
                moviesData: action.payload
            };
        case REQUEST_FAIL:
            return {
                ...state,
                isFetching: false,
                moviesData: null
            };
        default:
            return state;
    }
}
