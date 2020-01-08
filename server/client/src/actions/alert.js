import { SET_ALERT, REMOVE_ALERT } from './types';

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
