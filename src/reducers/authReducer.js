import {
    AUTH_SUCCESS,
    AUTH_NEED_CONFIRM,
    AUTH_CONFIRMED,
    LOGOUT_USER
} from '../actions/types';

const initialState = {
    username: null,
    isVerified: null
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                username: payload.username,
                isVerified: payload.verified
            };
        case LOGOUT_USER:
            return {
                ...state,
                username: null,
                isVerified: null
            };
        case AUTH_NEED_CONFIRM:
            return {
                ...state,
                username: payload,
                isVerified: false
            };
        case AUTH_CONFIRMED:
            return {
                ...state,
                isVerified: true
            };
        default:
            return state;
    }
}
