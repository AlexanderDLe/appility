import { combineReducers } from 'redux';
import authReducer from './authReducer';
import feedbackReducer from './feedbackReducer';
import quizReducer from './quizReducer';

export default combineReducers({
    auth: authReducer,
    feedback: feedbackReducer,
    quiz: quizReducer
});
