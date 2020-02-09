import {
    fetchUser,
    logoutUser,
    registerUser,
    confirmUser,
    loginUser
} from './auth';
import { setAlert, removeAlert, setLoading } from './feedback';
import { saveScore, getScores, resetScore } from './quiz';

export { fetchUser, logoutUser, registerUser, confirmUser, loginUser };
export { setAlert, removeAlert, setLoading };
export { saveScore, getScores, resetScore };
