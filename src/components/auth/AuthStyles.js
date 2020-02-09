import { makeStyles } from '@material-ui/core';
import { theme } from '../../styles/theme';

export const authFormStyles = makeStyles({
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

export const authHeaderStyles = makeStyles({
    header: {
        fontFamily: 'Audiowide',
        color: theme.palette.secondary.light,
        fontSize: '2.5em',
        fontWeight: 'lighter',
        padding: '20px'
    }
});

export const authSheetStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: '0 auto',
            width: '100%',
            maxWidth: '450px'
        }
    },
    paper: {
        backgroundColor: theme.palette.primary.main
    }
}));
