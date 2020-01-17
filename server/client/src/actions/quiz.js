import axios from 'axios';
import { SET_QUIZ, GET_SCORES } from './types';

const config = {
    headers: {
        'Content-Type': 'application/json'
    }
};

export const setQuiz = label => {
    return {
        type: SET_QUIZ,
        payload: label
    };
};

export const getScores = () => async dispatch => {
    const response = await axios.get('/scores');
    console.log(response.data);
    dispatch({
        type: GET_SCORES,
        payload: response.data
    });
};

export const saveScore = data => async dispatch => {
    const { subject, score } = data;
    const body = JSON.stringify({ subject, score });
    console.log(`Saving ${score} for ${subject}`);

    try {
        const response = await axios.post('/scores', body, config);
        dispatch({
            type: GET_SCORES,
            payload: response.data
        });
    } catch (error) {
        console.log(error);
    }
};
