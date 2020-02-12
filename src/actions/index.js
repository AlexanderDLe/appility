import {
    fetchUser,
    logoutUser,
    registerUser,
    confirmUser,
    resendConfirmation,
    loginUser,
    facebookLogin,
    googleLogin
} from './auth';
import { setAlert, removeAlert, setLoading } from './feedback';
import { saveScore, getScores, resetScore } from './quiz';

export {
    fetchUser,
    logoutUser,
    registerUser,
    confirmUser,
    resendConfirmation,
    loginUser,
    facebookLogin,
    googleLogin
};
export { setAlert, removeAlert, setLoading };
export { saveScore, getScores, resetScore };
