import { SET_ALERT, REMOVE_ALERT, SET_LOADING } from './types';

export const setAlert = message => async dispatch => {
    dispatch({
        type: SET_ALERT,
        payload: message
    });
};

export const removeAlert = () => {
    return {
        type: REMOVE_ALERT
    };
};

export const setLoading = () => {
    return {
        type: SET_LOADING
    };
};
