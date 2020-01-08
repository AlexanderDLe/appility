import { AUTH_SUCCESS, AUTH_FAIL, LOGOUT_USER } from '../actions/types';

const initialState = {
    user: null,
    isAuthenticated: null,
    loading: true
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                username: payload.username,
                isAuthenticated: true,
                loading: false
            };
        case LOGOUT_USER:
        case AUTH_FAIL:
            return {
                ...state,
                user: null,
                isAuthenticated: null,
                loading: false
            };
        default:
            return state;
    }
}
