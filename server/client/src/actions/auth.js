import axios from 'axios';
import { AUTH_SUCCESS, AUTH_FAIL, LOGOUT_USER } from './types';
import { setAlert } from './feedback';

const config = {
    headers: {
        'Content-Type': 'application/json'
    }
};

export const fetchUser = () => async dispatch => {
    const response = await axios.get('/api/current_user');
    if (response.data) {
        dispatch({ type: AUTH_SUCCESS, payload: response.data });
    } else {
        dispatch({ type: AUTH_FAIL });
    }
};

export const logoutUser = () => async dispatch => {
    axios.get('/api/logout');
    dispatch({ type: LOGOUT_USER });
};

export const loginUser = data => async dispatch => {
    const { email, password } = data;
    const body = JSON.stringify({ email, password });
    try {
        await axios.post('/api/login', body, config);
        dispatch(fetchUser());
    } catch (error) {
        dispatch({ type: AUTH_FAIL });
        dispatch(setAlert('Invalid Credentials.'));
    }
};

export const registerUser = data => async dispatch => {
    const { email, username, password } = data;
    const body = JSON.stringify({ username, email, password });
    try {
        await axios.post('/api/register', body, config);
        dispatch(loginUser(data));
    } catch (error) {
        dispatch({ type: AUTH_FAIL });
        dispatch(setAlert('Registration Failed.'));
    }
};
