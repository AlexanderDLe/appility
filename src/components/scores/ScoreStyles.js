import { makeStyles } from '@material-ui/core';

export const ScoreContentStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1),
        textDecoration: 'none'
    },
    header: {
        color: 'white',
        fontFamily: 'Audiowide',
        textTransform: 'uppercase',
        borderBottom: `1px solid ${theme.palette.secondary.main}`,
        textAlign: 'center',
        width: '100%',
        height: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    scoreBody: {
        minHeight: '400px',
        color: 'white'
    },
    loader: {
        backgroundColor: theme.palette.secondary.light
    }
}));

export const ScoreSheetStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: '0 auto',
            width: '100%',
            maxWidth: '600px'
        }
    },
    paper: {
        backgroundColor: theme.palette.primary.main
    }
}));

export const ScoreTableStyles = makeStyles(theme => ({
    table: {
        backgroundColor: theme.palette.primary.main,
        color: 'white'
    },
    cell: {
        color: 'white !important'
    },
    resetIcon: {
        cursor: 'pointer'
    }
}));
