import axios from 'axios';
import { SET_SCORES, RESET_SCORE } from './types';

const config = {
    headers: {
        'Content-Type': 'application/json'
    }
};

export const getScores = () => async dispatch => {
    const response = await axios.get('/scores');
    dispatch({
        type: SET_SCORES,
        payload: response.data
    });
};

export const saveScore = data => async dispatch => {
    const { subject, score } = data;
    const body = JSON.stringify({ subject, score });

    try {
        const response = await axios.post('/scores', body, config);
        dispatch({
            type: SET_SCORES,
            payload: response.data
        });
    } catch (error) {
        console.log(error);
    }
};

export const resetScore = quiz => async dispatch => {
    const body = JSON.stringify({ quiz });
    try {
        const response = await axios.put('/scores', body, config);
        dispatch({
            type: SET_SCORES,
            payload: response.data
        });
    } catch (error) {
        console.log(error);
    }
    dispatch({ type: RESET_SCORE });
};