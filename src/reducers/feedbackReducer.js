import {
    AUTH_SUCCESS,
    AUTH_NEED_CONFIRM,
    AUTH_CONFIRMED,
    AUTH_FAIL,
    LOGOUT_USER
} from '../actions/types';
import { SET_ALERT, REMOVE_ALERT, SET_LOADING } from '../actions/types';

const initialState = {
    loading: false,
    authError: null,
    authSuccess: null
};

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        case AUTH_SUCCESS:
        case AUTH_FAIL:
        case LOGOUT_USER:
        case AUTH_NEED_CONFIRM:
            return {
                ...state,
                authError: null,
                loading: false
            };
        case AUTH_CONFIRMED:
            return {
                ...state,
                authError: null,
                confirmSuccess: 'Confirmed! Please log in.',
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
