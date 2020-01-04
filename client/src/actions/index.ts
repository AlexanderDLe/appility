import axios from 'axios';
import { Dispatch } from 'redux';
import { FETCH_USER } from './types';

export const fetchUser = () => async (dispatch: Dispatch) => {
    const response = await axios.get('http://localhost:5000/api/current_user');
    console.log(response);
    dispatch({
        type: FETCH_USER,
        payload: response
    });
};
