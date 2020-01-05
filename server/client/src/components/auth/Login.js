import React from 'react';
import { styled, makeStyles, Button, TextField } from '@material-ui/core';
import { theme } from '../../styles/theme';

const MyButton = styled(({ color, ...other }) => <Button {...other} />)({
    background: props => props.color,
    width: '85%',
    maxWidth: '350px',
    margin: '10px',
    padding: '12px'
});

const useStyles = makeStyles({
    header: {
        fontFamily: 'Audiowide',
        color: theme.palette.primary.main,
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
        padding: '20px'
    }
});

export default function Login() {
    const classes = useStyles();
    return (
        <div>
            <h1 className={classes.header}>SIGN IN</h1>
            <form>
                <TextField
                    label="Email"
                    id="outlined-basic"
                    variant="outlined"
                    color="secondary"
                    className={classes.textField}
                />
                <TextField
                    label="Password"
                    id="outlined-basic"
                    variant="outlined"
                    type="password"
                    color="secondary"
                    className={classes.textField}
                />

                <MyButton variant="contained" href="/auth" color="#7ac57a">
                    <div className={classes.icon}>
                        <div className={classes.iconPadding}>Sign In</div>
                    </div>
                </MyButton>
            </form>
            <MyButton variant="contained" href="/auth/google" color="#ff6565">
                <div className={classes.icon}>
                    <i class="fab fa-google"></i>
                    <div className={classes.iconPadding}>
                        Sign In With Google
                    </div>
                </div>
            </MyButton>
            <MyButton variant="contained" href="/auth/google" color="#5b5bff">
                <div className={classes.icon}>
                    <i class="fab fa-facebook-f"></i>
                    <div className={classes.iconPadding}>
                        Sign In With Facebook
                    </div>
                </div>
            </MyButton>
            <div className={classes.textDiv}>
                <p>Forgot your password?</p>
                <p>Don't have an account? Register here.</p>
            </div>
        </div>
    );
}
