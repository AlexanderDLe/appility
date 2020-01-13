import { SET_QUIZ } from './types';

export const setQuiz = label => {
    return {
        type: SET_QUIZ,
        payload: label
    };
};
