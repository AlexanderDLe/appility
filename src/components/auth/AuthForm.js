import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { makeStyles } from '@material-ui/core';
import { registerUser, loginUser } from '../../actions';
import { removeAlert, setLoading } from '../../actions';
import { Link, Redirect } from 'react-router-dom';
import AuthTextField from './AuthTextField';
import AuthButton from './AuthButton';
import AuthHeader from './AuthHeader';
import { theme } from '../../styles/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { LinearProgress } from '@material-ui/core';
import { EmailRegex, PasswordRegex } from '../misc/Regex';

const useStyles = makeStyles({
    root: {
        textAlign: 'center',
        paddingTop: '25px',
        paddingBottom: '25px'
    },
    whiteText: {
        color: 'white'
    },
    iconPadding: {
        paddingLeft: '15px',
        display: 'inline'
    },
    textColor: {
        color: theme.palette.secondary.light
    },
    pointer: {
        cursor: 'pointer'
    },
    feedback: {
        margin: '0 auto',
        width: '95%',
        maxWidth: '350px'
    },
    loader: {
        backgroundColor: theme.palette.secondary.light
    }
});

const auth = {
    LOGIN: 'LOGIN',
    REGISTER: 'REGISTER'
};

const AuthForm = props => {
    const classes = useStyles();
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
    const onSubmit = data => {
        props.removeAlert();
        props.setLoading();
        if (authState === 'LOGIN') {
            props.loginUser(data);
        } else {
            props.registerUser(data);
        }
    };
    // oAuth Handler
    const oAuthHandler = () => {
        props.setLoading();
    };
    // Form Error Handlers
    const usernameErrorHandler = () => {
        if (errors.username) {
            switch (errors.username.type) {
                case 'required':
                    return 'This field is required.';
                case 'minLength':
                    return 'Must be at least 3 characters.';
                default:
                    return '';
            }
        }
    };
    // Handle feedback
    const dislayAuthError = () => {
        if (props.feedback.authError) {
            return (
                <div style={{ color: '#f44336' }} className={classes.feedback}>
                    {props.feedback.authError}
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

    // Form Error Handlers
    const emailErrorHandler = () => {
        if (errors.email) {
            switch (errors.email.type) {
                case 'required':
                    return 'This field is required.';
                case 'pattern':
                    return 'Must be a valid email';
                default:
                    return '';
            }
        }
    };
    const passwordErrorHandler = () => {
        if (errors.password) {
            switch (errors.password.type) {
                case 'required':
                    return 'This field is required.';
                case 'minLength':
                    return 'Must be at least 6 characters.';
                case 'maxLength':
                    return 'Must be at most 20 characters.';
                case 'pattern':
                    return 'Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 digit, 1 special character, and be 6-20 characters.';
                default:
                    return '';
            }
        }
    };
    const confirmPasswordErrorHandler = () => {
        if (errors.confirmPassword) {
            switch (errors.confirmPassword.type) {
                case 'required':
                    return 'This field is required.';
                case 'validate':
                    return 'Passwords must match.';
                default:
                    return '';
            }
        }
    };
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
    const setFormVariables = () => {
        if (authState === 'LOGIN') {
            formAction = '/api/login';
            authText = 'SIGN IN';
            emailRegistration = { required: true };
            passwordRegistration = { required: true };
        } else {
            formAction = '/api/register';
            authText = 'REGISTER';
            emailRegistration = { required: true, pattern: EmailRegex };
            usernameRegistration = {
                required: true,
                minLength: 3
            };
            passwordRegistration = {
                required: true,
                minLength: 6,
                maxLength: 20,
                pattern: PasswordRegex
            };
            confirmPasswordRegistration = {
                required: true,
                validate: validatePasswordMatch
            };
        }
    };
    setFormVariables();

    // Redirect if authenticated
    if (props.isAuthenticated) {
        return <Redirect to="/" />;
    }

    return (
        <div className={classes.root}>
            <AuthHeader authState={authState} />
            <form
                action={formAction}
                onSubmit={handleSubmit(onSubmit)}
                method="post"
            >
                <AuthTextField
                    registration={register(emailRegistration)}
                    label="Email"
                    name="email"
                    type="text"
                    error={errors.email ? true : false}
                    helperText={emailErrorHandler()}
                />
                {authState === 'REGISTER' ? (
                    <AuthTextField
                        registration={register(usernameRegistration)}
                        label="Username"
                        name="username"
                        type="text"
                        error={errors.username ? true : false}
                        helperText={usernameErrorHandler()}
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
                    helperText={passwordErrorHandler()}
                />
                {authState === 'REGISTER' ? (
                    <AuthTextField
                        registration={register(confirmPasswordRegistration)}
                        label="Confirm Password"
                        name="confirmPassword"
                        type="password"
                        error={errors.confirmPassword ? true : false}
                        helperText={confirmPasswordErrorHandler()}
                    />
                ) : (
                    ''
                )}
                {dislayAuthError()}
                <AuthButton type="submit" variant="contained" color="#7ac57a">
                    <div className={classes.whiteText}>
                        <div className={classes.iconPadding}>{authText}</div>
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
            <div style={{ padding: '20px' }} className={classes.textColor}>
                {authState === 'LOGIN' ? (
                    <React.Fragment>
                        <div
                            onClick={changeAuthState}
                            className={classes.pointer}
                        >
                            <p>Don't have an account? Register here.</p>
                        </div>
                    </React.Fragment>
                ) : (
                    <div onClick={changeAuthState} className={classes.pointer}>
                        <p>Have an account? Sign in here.</p>
                    </div>
                )}
                <Link className={classes.textColor} to="/privacy-policy">
                    Click here to read our privacy policy.
                </Link>
            </div>
            {displayLoadingBar()}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        feedback: state.feedback
    };
};

export default connect(mapStateToProps, {
    registerUser,
    loginUser,
    removeAlert,
    setLoading
})(AuthForm);
