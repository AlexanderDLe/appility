import React from 'react';
import { makeStyles } from '@material-ui/core';
import { theme } from '../../styles/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import MyTextField from './MyTextField';
import MyButton from './MyButton';

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
    }
});

export default function AuthForm(props) {
    let authText = '';
    if (props.authState === 'LOGIN') {
        authText = 'SIGN IN';
    } else {
        authText = 'REGISTER';
    }
    const renderFormHelper = () => {
        if (props.authState === 'LOGIN') {
            return (
                <div className={classes.textDiv}>
                    <p>Forgot your password?</p>
                    <div
                        onClick={props.changeAuthState}
                        className={classes.pointer}
                    >
                        <p>Don't have an account? Register here.</p>
                    </div>
                </div>
            );
        } else {
            return (
                <div className={classes.textDiv}>
                    <div
                        onClick={props.changeAuthState}
                        className={classes.pointer}
                    >
                        <p>Have an account? Sign in here.</p>
                    </div>
                </div>
            );
        }
    };

    const classes = useStyles();
    return (
        <div>
            <h1 className={classes.header}>{authText}</h1>
            <form>
                <MyTextField label="Email" name="email" type="text" />
                <MyTextField label="Password" name="password" type="password" />
                <MyButton variant="contained" href="/auth" color="#7ac57a">
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
            {renderFormHelper()}
        </div>
    );
}
