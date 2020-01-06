import axios from 'axios';
import { FETCH_USER, LOGOUT_USER } from './types';

export const fetchUser = () => async dispatch => {
    const response = await axios.get('/api/current_user');
    console.log('Fetch User Response:');
    console.log(response);
    dispatch({ type: FETCH_USER, payload: response.data });
};

export const logoutUser = () => async dispatch => {
    axios.get('/api/logout');
    dispatch({ type: LOGOUT_USER });
};
