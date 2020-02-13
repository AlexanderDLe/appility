import { makeStyles } from '@material-ui/core';

export const QuizCardStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
        margin: '15px auto',
        backgroundColor: 'rgb(22, 22, 22)',
        color: 'white'
    },
    cardHeader: {
        padding: '10px'
    },
    cardContent: {
        padding: '16px 0px 0px 16px'
    },
    cardActions: {
        padding: '0px 0px 4x 5px'
    },
    media: {
        height: 0,
        paddingTop: '50.25%' // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest
        }),
        color: 'white'
    },
    expandOpen: {
        transform: 'rotate(180deg)'
    },
    avatar: {
        backgroundColor: 'rgb(22, 22, 22)'
    },
    link: {
        textDecoration: 'none',
        color: theme.palette.secondary.main
    }
}));

export const QuizSheetStyles = makeStyles(theme => ({
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

export const QuizContentStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1),
        textDecoration: 'none'
    },
    block: {
        width: '100%',
        height: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    submitButton: {
        margin: theme.spacing(1),
        backgroundColor: '#87c643',
        color: 'white'
    },
    quizBody: {
        // padding: '24px 24px',
        minHeight: '400px',
        color: 'white'
    },
    modal: {
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        position: 'absolute',
        top: '50%',
        left: '50%',
        textAlign: 'center',
        padding: '24px',
        transform: 'translate(-50%, -50%)',
        outline: 'none'
    },
    button: {
        color: 'white',
        borderColor: 'white',
        borderWidth: '1px'
    }
}));

export const QuizQuestionResults = makeStyles(theme => ({
    root: {
        display: 'flex',
        minHeight: '400px',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        paddingBottom: '10px'
    },
    box: {
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '150px',
        width: '150px',
        border: '3px solid white',
        borderRadius: '50%'
    },
    scoreLetter: {
        fontFamily: 'Audiowide',
        fontSize: '5em'
    },
    question: {
        color: 'white',
        fontSize: '1.15em',
        paddingBottom: '10px',
        display: 'flex',
        alignItems: 'start'
    },
    questionOption: {
        paddingTop: '10px'
    },
    seeAnswer: {
        cursor: 'pointer'
    },
    checkbox: {
        color: 'white'
    },
    incorrect: {
        color: '#ff2525'
    },
    correct: {
        color: '#00ff00'
    }
}));

export const QuizQuestionPresenter = makeStyles(theme => ({
    question: {
        color: 'white',
        fontSize: '1.15em',
        paddingBottom: '10px',
        display: 'flex',
        alignItems: 'start'
    },
    questionOption: {
        paddingTop: '10px'
    },
    showAnswer: {
        cursor: 'pointer'
    },
    checkbox: {
        color: 'white !important'
    }
}));
