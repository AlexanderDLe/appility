import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { theme } from '../../styles/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import MyTextField from './MyTextField';
import MyButton from './MyButton';
import { useForm } from 'react-hook-form';
import { EmailRegex } from '../misc/EmailRegex';

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
    textField: {
        width: '85%',
        maxWidth: '350px',
        margin: '15px'
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

export default function AuthForm() {
    const classes = useStyles();
    const [authState, setAuthState] = useState(auth.LOGIN);
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        console.log(data);
    };
    let authText = '';
    if (authState === 'LOGIN') {
        authText = 'SIGN IN';
    } else {
        authText = 'REGISTER';
    }
    const changeAuthState = () => {
        if (authState === auth.LOGIN) {
            setAuthState(auth.REGISTER);
        } else {
            setAuthState(auth.LOGIN);
        }
    };

    // Form Error Handlers //
    const nameErrorHandler = () => {
        if (errors.name) {
            switch (errors.name.type) {
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
                case 'minLength':
                    return 'Must be at least 3 characters.';
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
                default:
                    return '';
            }
        }
    };
    // Auth Form Helper //
    const renderFormHelper = () => {
        if (authState === 'LOGIN') {
            return (
                <React.Fragment>
                    <p>Forgot your password?</p>
                    <div onClick={changeAuthState} className={classes.pointer}>
                        <p>Don't have an account? Register here.</p>
                    </div>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <div onClick={changeAuthState} className={classes.pointer}>
                        <p>Have an account? Sign in here.</p>
                    </div>
                </React.Fragment>
            );
        }
    };

    return (
        <div>
            <h1 className={classes.header}>{authText}</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <MyTextField
                    registration={register({
                        required: true,
                        minLength: 3,
                        pattern: EmailRegex
                    })}
                    label="Email"
                    name="email"
                    type="text"
                    error={errors.email}
                    helperText={emailErrorHandler()}
                />
                {authState === 'REGISTER' ? (
                    <MyTextField
                        registration={register({
                            required: true,
                            minLength: 3
                        })}
                        label="Username"
                        name="name"
                        type="text"
                        error={errors.name}
                        helperText={nameErrorHandler()}
                    />
                ) : (
                    ''
                )}
                <MyTextField
                    registration={register({ required: true, minLength: 6 })}
                    label="Password"
                    name="password"
                    type="password"
                    error={errors.password}
                    helperText={passwordErrorHandler()}
                />
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
                {renderFormHelper()}
                <Link className={classes.privacyPolicy} to="/privacy-policy">
                    Click here to read our privacy policy.
                </Link>
            </div>
        </div>
    );
}
