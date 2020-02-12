import { makeStyles } from '@material-ui/core';

export const BodyStyles = makeStyles(theme => ({
    body: {
        minHeight: 'calc(101vh - 64px)',
        padding: '0px 6px 64px 6px',
        backgroundColor: 'rgb(31, 31, 31)',
        boxShadow: '0px 0px 25px -10px #000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflowX: 'hidden'
    },
    div: {
        width: '100%'
    }
}));

export const LandingStyles = makeStyles(theme => ({
    img: {
        padding: theme.spacing(2),
        textAlign: 'center'
    },
    text: {
        textAlign: 'center',
        fontFamily: 'Audiowide',
        color: theme.palette.secondary.main
    },
    h3text: {
        fontFamily: 'Roboto',
        color: theme.palette.secondary.light
    }
}));

export const LandingWelcomeStyles = makeStyles(theme => ({
    text: {
        fontSize: '1.25em',
        textAlign: 'center',
        fontFamily: 'Audiowide',
        color: theme.palette.secondary.main
    }
}));
