import {
    REQUEST1,
    REQUEST_SUCCESS1,
    REQUEST_FAIL1
} from "../actions/getGenres";

export const initialState = {
    genresData: null,
    isFetching: false
};

export function genresReducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST1:
            return { ...state, isFetching: true };
        case REQUEST_SUCCESS1:
            return {
                ...state,
                isFetching: false,
                genresData: action.payload
            };
        case REQUEST_FAIL1:
            return {
                ...state,
                isFetching: false,
                genresData: null
            };
        default:
            return state;
    }
}
