import { AUTH_SUCCESS, AUTH_FAIL, LOGOUT_USER } from '../actions/types';
import { SET_ALERT, REMOVE_ALERT, SET_LOADING } from '../actions/types';

const initialState = {
    loading: false,
    authError: null
};

export default (state = initialState, action) => {
    const { type, payload } = action;
    // console.log(type);
    switch (type) {
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        case AUTH_SUCCESS:
        case AUTH_FAIL:
        case LOGOUT_USER:
            return {
                ...state,
                authError: null,
                loading: false
            };
        case SET_ALERT:
            return {
                ...state,
                loading: false,
                authError: payload
            };
        case REMOVE_ALERT:
            return {
                ...state,
                authError: null
            };
        default:
            return state;
    }
};
