import React, { useState } from 'react';
import { connect } from 'react-redux';
import { registerUser, loginUser } from '../../actions';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { theme } from '../../styles/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import MyTextField from './MyTextField';
import MyButton from './MyButton';
import AuthHeader from './AuthHeader';
import { useForm } from 'react-hook-form';
import { EmailRegex, PasswordRegex } from '../misc/Regex';

const useStyles = makeStyles({
    header: {
        fontFamily: 'Audiowide',
        color: theme.palette.secondary.light,
        fontSize: '2.5em',
        fontWeight: 'lighter'
    },
    icon: {
        color: 'white'
    },
    iconPadding: {
        paddingLeft: '15px',
        display: 'inline'
    },
    textDiv: {
        padding: '20px',
        color: theme.palette.secondary.light
    },
    pointer: {
        cursor: 'pointer'
    },
    privacyPolicy: {
        textDecoration: 'none',
        color: theme.palette.secondary.light
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
        if (authState === auth.LOGIN) {
            setAuthState(auth.REGISTER);
        } else {
            setAuthState(auth.LOGIN);
        }
    };

    // Form Submit Handler
    const onSubmit = data => {
        console.log('Sending data:');
        console.log(data);
        if (authState === 'LOGIN') {
            props.loginUser(data);
        } else {
            props.registerUser(data);
        }
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
    const setRegistration = () => {
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
    setRegistration();

    return (
        <div>
            <h1 className={classes.header}>
                <AuthHeader authState={authState} />
            </h1>
            <form
                action={formAction}
                onSubmit={handleSubmit(onSubmit)}
                method="post"
            >
                <MyTextField
                    registration={register(emailRegistration)}
                    label="Email"
                    name="email"
                    type="text"
                    error={errors.email ? true : false}
                    helperText={emailErrorHandler()}
                />
                {authState === 'REGISTER' ? (
                    <MyTextField
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
                <MyTextField
                    registration={register(passwordRegistration)}
                    label="Password"
                    name="password"
                    type="password"
                    error={errors.password ? true : false}
                    helperText={passwordErrorHandler()}
                />
                {authState === 'REGISTER' ? (
                    <MyTextField
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
                <MyButton type="submit" variant="contained" color="#7ac57a">
                    <div className={classes.icon}>
                        <div className={classes.iconPadding}>{authText}</div>
                    </div>
                </MyButton>
            </form>
            <MyButton variant="contained" href="/auth/google" color="#ff6565">
                <div className={classes.icon}>
                    <FontAwesomeIcon icon={faGoogle} />
                    <div className={classes.iconPadding}>
                        {authText} With Google
                    </div>
                </div>
            </MyButton>
            <MyButton variant="contained" href="/auth/facebook" color="#5b5bff">
                <div className={classes.icon}>
                    <FontAwesomeIcon icon={faFacebookF} />
                    <div className={classes.iconPadding}>
                        {authText} With Facebook
                    </div>
                </div>
            </MyButton>
            <div className={classes.textDiv}>
                {authState === 'LOGIN' ? (
                    <React.Fragment>
                        <div className={classes.pointer}>
                            <p>Forgot your password?</p>
                        </div>
                        <div
                            onClick={changeAuthState}
                            className={classes.pointer}
                        >
                            <p>Don't have an account? Register here.</p>
                        </div>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <div
                            onClick={changeAuthState}
                            className={classes.pointer}
                        >
                            <p>Have an account? Sign in here.</p>
                        </div>
                    </React.Fragment>
                )}
                <Link className={classes.privacyPolicy} to="/privacy-policy">
                    Click here to read our privacy policy.
                </Link>
            </div>
        </div>
    );
};

export default connect(null, { registerUser, loginUser })(AuthForm);
