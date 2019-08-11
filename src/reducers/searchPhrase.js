import { SET_SEARCH_PHRASE } from "../actions/setSearchPhrase";

export const initialState = {
    searchPhrase: ""
};

export function searchPhraseReducer(state = initialState, action) {
    switch (action.type) {
        case SET_SEARCH_PHRASE:
            return { ...state, searchPhrase: action.payload };
        default:
            return state;
    }
}
