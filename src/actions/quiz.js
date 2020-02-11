import axios from 'axios';
import { SET_SCORES, RESET_SCORE } from './types';
import { Auth } from 'aws-amplify';

const config = {
    headers: {
        'Content-Type': 'application/json'
    }
};

const API_URL = 'https://5ogygpk95j.execute-api.us-west-1.amazonaws.com/Dev';

const getHeader = async () => {
    try {
        const auth = await Auth.currentAuthenticatedUser();
        return {
            headers: {
                'Content-Type': 'application/json',
                Authorization: auth.signInUserSession.idToken.jwtToken
            }
        };
    } catch (error) {
        console.log(error);
    }
};

export const getScores = () => async dispatch => {
    try {
        let header = await getHeader();
        const response = await axios.get(`${API_URL}/my-tester`, header);
        console.log(response);
    } catch (error) {
        console.log(error);
    }

    // const response = await axios.get('/scores');
    // dispatch({
    //     type: SET_SCORES,
    //     payload: response.data
    // });
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
