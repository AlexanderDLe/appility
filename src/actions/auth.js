import axios from 'axios';
import { AUTH_SUCCESS, AUTH_FAIL, LOGOUT_USER } from './types';
import { setAlert } from './feedback';
// import { getScores } from './quiz';
import { Auth } from 'aws-amplify';

const config = {
    headers: {
        'Content-Type': 'application/json'
    }
};

export const fetchUser = () => async dispatch => {
    let authenticated = localStorage.getItem('appilityAuth');
    console.log(authenticated);
    if (authenticated) {
        dispatch({
            type: AUTH_SUCCESS,
            payload: localStorage.getItem(
                'CognitoIdentityServiceProvider.qenq8qkqqeqs3vsitn0glheic.LastAuthUser'
            )
        });
        // dispatch(getScores());
    }
};

export const logoutUser = () => async dispatch => {
    await Auth.signOut();
    localStorage.removeItem('appilityAuth');
    dispatch({ type: LOGOUT_USER });
};

export const loginUser = data => async dispatch => {
    try {
        await Auth.signIn({
            username: data.username,
            password: data.password
        });
        localStorage.setItem('appilityAuth', 'true');
        dispatch(fetchUser());
    } catch (error) {
        dispatch({ type: AUTH_FAIL });
        dispatch(setAlert('Invalid Credentials.'));
    }
};

export const registerUser = data => async dispatch => {
    const { email, username, password } = data;
    const body = JSON.stringify({ username, email, password });
    try {
        await axios.post('/api/register', body, config);
        dispatch(loginUser(data));
    } catch (error) {
        dispatch({ type: AUTH_FAIL });
        dispatch(setAlert('Registration Failed.'));
    }
};
