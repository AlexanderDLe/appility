import {
    AUTH_SUCCESS,
    AUTH_FAIL,
    AUTH_NEED_CONFIRM,
    AUTH_CONFIRMED,
    LOGOUT_USER,
    RESEND_CONFIRMATION
} from './types';
import { setAlert } from './feedback';
import { Auth } from 'aws-amplify';
import { getScores } from './quiz';

export const fetchUser = () => async dispatch => {
    try {
        const user = await Auth.currentAuthenticatedUser({
            bypassCache: true
        });
        let name = user.username;
        if (name.slice(0, 8) === 'Facebook') name = user.attributes.name;
        if (name.slice(0, 6) === 'Google') name = user.attributes.name;
        localStorage.setItem('appilityAuth', 'true');
        localStorage.setItem('appilityUser', name);
        dispatch({
            type: AUTH_SUCCESS,
            payload: {
                username: name,
                id: user.attributes.sub
            }
        });
        dispatch(getScores());
    } catch (error) {
        localStorage.removeItem('appilityAuth');
        localStorage.removeItem('appilityUser');
    }
};

export const fetchLocalUser = () => async dispatch => {
    if (localStorage.getItem('appilityAuth')) {
        dispatch({
            type: AUTH_SUCCESS,
            payload: localStorage.getItem('appilityUser')
        });
    }
};

export const logoutUser = () => async dispatch => {
    await Auth.signOut();
    localStorage.removeItem('appilityAuth');
    localStorage.removeItem('appilityUser');
    dispatch({ type: LOGOUT_USER });
};

export const loginUser = data => async dispatch => {
    try {
        await Auth.signIn({
            username: data.username,
            password: data.password
        });
        dispatch(fetchUser());
    } catch (error) {
        if (error.message === 'User is not confirmed.') {
            dispatch({ type: AUTH_NEED_CONFIRM, payload: data.username });
        } else {
            dispatch({ type: AUTH_FAIL });
            dispatch(setAlert('Invalid Credentials.'));
        }
    }
};

export const registerUser = data => async dispatch => {
    try {
        await Auth.signUp({
            username: data.username,
            password: data.password,
            attributes: {
                email: data.email
            }
        });
        dispatch({ type: AUTH_NEED_CONFIRM, payload: data.username });
    } catch (error) {
        dispatch({ type: AUTH_FAIL });
        dispatch(setAlert('Registration Failed.'));
    }
};

export const confirmUser = data => async dispatch => {
    try {
        await Auth.confirmSignUp(data.username, data.confirmationCode);
        dispatch({ type: AUTH_CONFIRMED });
    } catch (error) {
        dispatch({ type: AUTH_FAIL });
        dispatch(setAlert('Invalid Code.'));
    }
};

export const resendConfirmation = username => async dispatch => {
    try {
        await Auth.resendSignUp(username);
        dispatch({ type: RESEND_CONFIRMATION });
    } catch (error) {
        dispatch({ type: AUTH_FAIL });
        dispatch(setAlert('Unable to send code.'));
    }
};

export const facebookLogin = () => async () => {
    try {
        await Auth.federatedSignIn({ provider: 'facebook' });
    } catch (error) {
        console.log(error);
    }
};

export const googleLogin = () => async () => {
    try {
        await Auth.federatedSignIn({ provider: 'google' });
    } catch (error) {
        console.log(error);
    }
};
