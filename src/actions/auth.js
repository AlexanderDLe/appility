import {
    AUTH_SUCCESS,
    AUTH_FAIL,
    AUTH_NEED_CONFIRM,
    AUTH_CONFIRMED,
    LOGOUT_USER
} from './types';
import { setAlert } from './feedback';
import { Auth } from 'aws-amplify';
// import { getScores } from './quiz';

export const fetchUser = () => async dispatch => {
    let authenticated = localStorage.getItem('appilityAuth');
    if (authenticated) {
        const payload = {
            username: localStorage.getItem(
                'CognitoIdentityServiceProvider.qenq8qkqqeqs3vsitn0glheic.LastAuthUser'
            ),
            verified: localStorage.getItem('appilityVerified')
        };
        dispatch({
            type: AUTH_SUCCESS,
            payload: payload
        });
        // dispatch(getScores());
    }
};

export const logoutUser = () => async dispatch => {
    await Auth.signOut();
    localStorage.removeItem('appilityAuth');
    localStorage.removeItem('appilityVerified');
    dispatch({ type: LOGOUT_USER });
};

export const loginUser = data => async dispatch => {
    try {
        const user = await Auth.signIn({
            username: data.username,
            password: data.password
        });
        console.log(user);
        localStorage.setItem('appilityAuth', 'true');
        localStorage.setItem(
            'appilityVerified',
            user.attributes.email_verified
        );
        dispatch(fetchUser());
    } catch (error) {
        console.log(error);
        if (error.message === 'User is not confirmed.') {
            dispatch({ type: AUTH_NEED_CONFIRM });
        } else {
            dispatch(setAlert('Invalid Credentials.'));
            dispatch({ type: AUTH_FAIL });
        }
    }
};

export const registerUser = data => async dispatch => {
    try {
        const user = await Auth.signUp({
            username: data.username,
            password: data.password,
            attributes: {
                email: data.email
            }
        });
        console.log(user);
        dispatch({ type: AUTH_NEED_CONFIRM });
    } catch (error) {
        console.log(error);
        dispatch({ type: AUTH_FAIL });
        dispatch(setAlert('Registration Failed.'));
    }
};

export const confirmUser = data => async dispatch => {
    try {
        const user = Auth.confirmSignUp(data.username, data.confirmationCode);
        console.log(user);
        dispatch({ type: AUTH_CONFIRMED });
    } catch (error) {
        console.log(error);
        dispatch({ type: AUTH_FAIL });
        dispatch(setAlert('Invalid Code.'));
    }
};
