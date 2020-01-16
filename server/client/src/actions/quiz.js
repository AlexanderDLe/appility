import axios from 'axios';
import { SET_QUIZ, SAVE_SCORE } from './types';

export const setQuiz = label => {
    return {
        type: SET_QUIZ,
        payload: label
    };
};

const config = {
    headers: {
        'Content-Type': 'application/json'
    }
};

export const saveScore = (subject, score) => {
    console.log(`Saving ${score} for ${subject}`);

    const body = JSON.stringify({ subject, score });
    axios.post('/scores', body, config);
    return {
        type: SAVE_SCORE
    };
};
