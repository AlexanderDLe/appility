import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { authFormStyles } from './AuthStyles';
import { registerUser, loginUser, confirmUser } from '../../actions';
import { removeAlert, setLoading } from '../../actions';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import AuthTextField from './AuthTextField';
import AuthButton from './AuthButton';
import AuthHeader from './AuthHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { LinearProgress } from '@material-ui/core';
import { EmailRegex, PasswordRegex } from '../misc/Regex';

import { usernameErrorHandler } from './AuthErrorHandlers';
import { emailErrorHandler } from './AuthErrorHandlers';
import { passwordErrorHandler } from './AuthErrorHandlers';
import { confirmPasswordErrorHandler } from './AuthErrorHandlers';
import { confirmCodeErrorHandler } from './AuthErrorHandlers';

const auth = {
    LOGIN: 'LOGIN',
    REGISTER: 'REGISTER',
    CONFIRM: 'CONFIRM'
};

const AuthForm = props => {
    const classes = authFormStyles();
    const [authState, setAuthState] = useState(auth.LOGIN);
    const { register, handleSubmit, errors, watch } = useForm();

    // Change Auth State Handler
    const changeAuthState = () => {
        props.removeAlert();
        if (authState === auth.LOGIN) {
            setAuthState(auth.REGISTER);
        } else {
            setAuthState(auth.LOGIN);
        }
    };
    // Form Submit Handler
    const onSubmit = async (data, e) => {
        props.removeAlert();
        props.setLoading();
        if (authState === auth.LOGIN) {
            props.loginUser(data);
        } else if (authState === auth.REGISTER) {
            props.registerUser(data);
        } else if (authState === auth.CONFIRM) {
            e.target.reset();
            data.username = props.auth.username;
            props.confirmUser(data);
        }
    };
    // oAuth Handler
    const oAuthHandler = () => {
        props.setLoading();
    };
    // Handle feedback
    const dislayAuthFeedback = () => {
        if (props.feedback.authError) {
            return (
                <div style={{ color: '#f44336' }} className={classes.feedback}>
                    {props.feedback.authError}
                </div>
            );
        } else if (props.feedback.confirmSuccess) {
            return (
                <div
                    style={{ color: 'rgb(122, 197, 122)' }}
                    className={classes.feedback}
                >
                    {props.feedback.confirmSuccess}
                </div>
            );
        }
    };
    const displayLoadingBar = () => {
        if (props.feedback.loading) {
            return (
                <div className={classes.feedback}>
                    <LinearProgress
                        className={classes.loader}
                        color="primary"
                    />
                </div>
            );
        }
    };

    // Validate Password Error Handler
    const validatePasswordMatch = value => {
        return value === watch('password');
    };

    // Set Form Variables Based On Login/Register
    let formAction;
    let authText;
    let emailRegistration;
    let usernameRegistration;
    let passwordRegistration;
    let confirmPasswordRegistration;
    let confirmCodeRegistration;
    const setFormVariables = state => {
        usernameRegistration = {
            required: true,
            minLength: 3
        };
        if (state === 'LOGIN') {
            formAction = '/api/login';
            authText = 'SIGN IN';
            passwordRegistration = { required: true };
        } else if (state === 'REGISTER') {
            formAction = '/api/register';
            authText = 'REGISTER';
            emailRegistration = { required: true, pattern: EmailRegex };
            passwordRegistration = {
                required: true,
                minLength: 8,
                maxLength: 20,
                pattern: PasswordRegex
            };
            confirmPasswordRegistration = {
                required: true,
                validate: validatePasswordMatch
            };
        } else if (state === 'CONFIRM') {
            authText = 'CONFIRM';
            confirmCodeRegistration = {
                required: true
            };
        }
    };
    setFormVariables(authState);

    // Redirect if authenticated
    if (localStorage.getItem('appilityAuth') === 'true') {
        return <Redirect to="/" />;
    } else if (props.auth.isVerified === true && authState !== auth.LOGIN) {
        setAuthState(auth.LOGIN);
    } else if (props.auth.isVerified === false && authState !== auth.CONFIRM) {
        setAuthState(auth.CONFIRM);
    }

    const renderFormHelpers = () => {
        let formStateHelper;
        if (authState === auth.LOGIN) {
            formStateHelper = (
                <div onClick={changeAuthState} className={classes.pointer}>
                    <p>Don't have an account? Register here.</p>
                </div>
            );
        } else if (authState === auth.REGISTER) {
            formStateHelper = (
                <div onClick={changeAuthState} className={classes.pointer}>
                    <p>Have an account? Sign in here.</p>
                </div>
            );
        }
        return (
            <div style={{ padding: '20px' }} className={classes.textColor}>
                {formStateHelper}
                <Link className={classes.textColor} to="/privacy-policy">
                    Click here to read our privacy policy.
                </Link>
            </div>
        );
    };
    const renderFormContent = () => {
        if (authState === auth.LOGIN || authState === auth.REGISTER) {
            return (
                <React.Fragment>
                    <form
                        action={formAction}
                        onSubmit={handleSubmit(onSubmit)}
                        method="post"
                    >
                        <AuthTextField
                            registration={register(usernameRegistration)}
                            label="Username"
                            name="username"
                            type="text"
                            error={errors.username ? true : false}
                            helperText={usernameErrorHandler(errors)}
                        />
                        {authState === 'REGISTER' ? (
                            <AuthTextField
                                registration={register(emailRegistration)}
                                label="Email"
                                name="email"
                                type="text"
                                error={errors.email ? true : false}
                                helperText={emailErrorHandler(errors)}
                            />
                        ) : (
                            ''
                        )}
                        <AuthTextField
                            registration={register(passwordRegistration)}
                            label="Password"
                            name="password"
                            type="password"
                            error={errors.password ? true : false}
                            helperText={passwordErrorHandler(errors)}
                        />
                        {authState === 'REGISTER' ? (
                            <AuthTextField
                                registration={register(
                                    confirmPasswordRegistration
                                )}
                                label="Confirm Password"
                                name="confirmPassword"
                                type="password"
                                error={errors.confirmPassword ? true : false}
                                helperText={confirmPasswordErrorHandler(errors)}
                            />
                        ) : (
                            ''
                        )}
                        {dislayAuthFeedback()}
                        <AuthButton
                            type="submit"
                            variant="contained"
                            color="#7ac57a"
                        >
                            <div className={classes.whiteText}>
                                <div className={classes.iconPadding}>
                                    {authText}
                                </div>
                            </div>
                        </AuthButton>
                    </form>
                    <AuthButton
                        onClick={oAuthHandler}
                        href="/auth/google"
                        color="#ff6565"
                    >
                        <div className={classes.whiteText}>
                            <FontAwesomeIcon icon={faGoogle} />
                            <div className={classes.iconPadding}>
                                {authText} With Google
                            </div>
                        </div>
                    </AuthButton>
                    <AuthButton
                        onClick={oAuthHandler}
                        href="/auth/facebook"
                        color="#5b5bff"
                    >
                        <div className={classes.whiteText}>
                            <FontAwesomeIcon icon={faFacebookF} />
                            <div className={classes.iconPadding}>
                                {authText} With Facebook
                            </div>
                        </div>
                    </AuthButton>
                </React.Fragment>
            );
        } else if (authState === auth.CONFIRM) {
            return (
                <React.Fragment>
                    <form
                        action={formAction}
                        onSubmit={handleSubmit(onSubmit)}
                        method="post"
                    >
                        <AuthTextField
                            registration={register(confirmCodeRegistration)}
                            label="Confirm Email Code"
                            name="confirmationCode"
                            type="number"
                            error={errors.confirmationCode ? true : false}
                            helperText={confirmCodeErrorHandler(errors)}
                        />
                        {dislayAuthFeedback()}
                        <AuthButton
                            type="submit"
                            variant="contained"
                            color="#7ac57a"
                        >
                            <div className={classes.whiteText}>
                                <div className={classes.iconPadding}>
                                    {authText}
                                </div>
                            </div>
                        </AuthButton>
                    </form>
                </React.Fragment>
            );
        }
    };
    return (
        <div className={classes.root}>
            <AuthHeader authState={authState} />
            {renderFormContent()}
            {renderFormHelpers()}
            {displayLoadingBar()}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        auth: state.auth,
        feedback: state.feedback
    };
};

export default connect(mapStateToProps, {
    registerUser,
    loginUser,
    confirmUser,
    removeAlert,
    setLoading
})(AuthForm);
