import axios from 'axios';
import { SET_SCORES, UNSET_LOADING } from './types';
import { Auth } from 'aws-amplify';

const API = 'https://5ogygpk95j.execute-api.us-west-1.amazonaws.com/Dev/scores';

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
        const response = await axios.get(`${API}`, header);
        dispatch({
            type: SET_SCORES,
            payload: response.data
        });
    } catch (error) {
        console.log(error);
    }
};

export const saveScore = data => async dispatch => {
    const body = {
        subject: data.subject,
        score: data.score
    };
    try {
        let header = await getHeader();
        const response = await axios.post(`${API}`, body, header);
        console.log(response);
        dispatch({
            type: SET_SCORES,
            payload: response.data
        });
    } catch (error) {
        console.log(error);
    }
};

export const resetScore = subject => async dispatch => {
    const body = { subject: subject };
    try {
        const header = await getHeader();
        const response = await axios.put(API, body, header);
        dispatch({
            type: SET_SCORES,
            payload: response.data
        });
    } catch (error) {
        console.log(error);
        dispatch({ type: UNSET_LOADING });
    }
};
