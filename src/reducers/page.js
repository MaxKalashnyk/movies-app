import { SET_PAGE } from "../actions/setPage";

export const initialState = {
    page: 1
};

export function pageReducer(state = initialState, action) {
    switch (action.type) {
        case SET_PAGE:
            return { ...state, page: action.payload };
        default:
            return state;
    }
}
