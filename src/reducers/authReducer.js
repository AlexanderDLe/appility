import { AUTH_SUCCESS, AUTH_FAIL, LOGOUT_USER } from '../actions/types';

const initialState = {
    username: null,
    isAuthenticated: null
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                username: payload,
                isAuthenticated: true
            };
        case LOGOUT_USER:
        case AUTH_FAIL:
            return {
                ...state,
                username: null,
                isAuthenticated: null
            };
        default:
            return state;
    }
}
