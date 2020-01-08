import axios from 'axios';
import { FETCH_USER, LOGOUT_USER } from './types';

export const fetchUser = () => async dispatch => {
    const response = await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER, payload: response.data });
};

export const logoutUser = () => async dispatch => {
    axios.get('/api/logout');
    dispatch({ type: LOGOUT_USER });
};

export const loginUser = data => async dispatch => {
    console.log('Login User action creator reached.');
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const { email, password } = data;
    const body = JSON.stringify({ email, password });
    try {
        const response = await axios.post('/api/login', body, config);
        console.log(response);
    } catch (error) {
        console.log('Reached error');
        console.log(error);
    }
};

export const registerUser = data => async dispatch => {
    console.log('Register User action creator reached.');
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const { email, username, password } = data;
    const body = JSON.stringify({ username, email, password });
    try {
        const response = await axios.post('/api/register', body, config);
        dispatch(loginUser(data));
        console.log(response);
    } catch (error) {
        console.log(error);
    }
};
