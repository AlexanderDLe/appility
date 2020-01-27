import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {
    makeStyles,
    ButtonGroup,
    Button,
    useMediaQuery,
    Fab,
    Modal
} from '@material-ui/core';
import {
    ChevronLeft,
    ChevronRight,
    Check,
    ErrorOutline
} from '@material-ui/icons';

import QuestionPresenter from './QuestionPresenter';
import QuestionResults from './QuestionResults';

const useStyles = makeStyles(theme => ({
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

const dynamicStyles = color => {
    return {
        header: {
            color: 'white',
            borderBottom: `1px solid ${color}`,
            textAlign: 'center',
            fontWeight: 'lighter'
        },
        footer: {
            borderTop: `1px solid ${color}`
        },
        modal: {
            borderBottom: `1px solid ${color}`
        }
    };
};

const mediaQueryStyles = query => {
    if (query) return { padding: '24px' };
    else return { padding: '6px' };
};

const fetchQuizData = label => {
    if (label) return require(`./data/${label}`);
    else return require(`./data/test`);
};

// Quiz States
const QUIZ = 'QUIZ';
const RESULTS = 'RESULTS';

const QuizContents = ({ quiz, param }) => {
    const classes = useStyles();
    const data = fetchQuizData(param).default;
    const style = dynamicStyles(data.color);
    const minWidthQuery = useMediaQuery('(min-width: 600px');
    const dynamicPadding = mediaQueryStyles(minWidthQuery);

    const [contentState, setContentState] = useState(QUIZ);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showAnswer, setShowAnswer] = useState(false);
    const [questionCount, setQuestionCount] = useState(0);
    const [answerArray, setAnswerArray] = useState(
        data.items.map(item => {
            return {
                ...item,
                correct: null,
                chosenAnswer: null
            };
        })
    );
    // Handle Answer Array
    const handleAnswer = (index, answer) => {
        const newArray = [...answerArray];
        newArray[index].chosenAnswer = answer;
        newArray[index].correct = answer === newArray[index].answer;
        setAnswerArray(newArray);
    };
    // Handle Show Answer
    const handleShowAnswer = () => {
        if (showAnswer) setShowAnswer(false);
        else setShowAnswer(true);
    };
    // Handle Counter
    const incrementCounter = () => {
        if (questionCount < data.items.length - 1) {
            setQuestionCount(questionCount + 1);
        }
        setShowAnswer(false);
    };
    const decrementCounter = () => {
        if (questionCount > 0) {
            setQuestionCount(questionCount - 1);
        }
        setShowAnswer(false);
    };
    // Handle Modal
    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };
    // Submit Quiz Or Open Warning Modal
    const submitQuiz = () => {
        for (let item of answerArray) {
            if (item.correct === null) {
                return openModal();
            }
        }
        setContentState(RESULTS);
    };
    // Render Quiz/Results Content
    const renderContentBody = () => {
        if (contentState === QUIZ) {
            return (
                <QuestionPresenter
                    showAnswer={showAnswer}
                    countTotal={data.items.length}
                    handleAnswer={handleAnswer}
                    count={questionCount}
                    data={answerArray[questionCount]}
                />
            );
        } else if (contentState === RESULTS) {
            return <QuestionResults subject={data.label} data={answerArray} />;
        }
    };
    // Render Action Buttons
    const renderActions = () => {
        if (contentState === QUIZ) {
            return (
                <ButtonGroup
                    className={classes.buttons}
                    variant="outlined"
                    size="medium"
                >
                    <Button
                        className={classes.button}
                        onClick={handleShowAnswer}
                    >
                        {showAnswer ? 'Hide' : 'Show'} Answer
                    </Button>
                    <Button
                        className={classes.button}
                        onClick={decrementCounter}
                    >
                        <ChevronLeft />
                    </Button>
                    <Button
                        className={classes.button}
                        onClick={incrementCounter}
                    >
                        <ChevronRight />
                    </Button>
                    <Button
                        className={classes.button}
                        onClick={submitQuiz}
                        style={{ padding: '0 20px' }}
                    >
                        <Check style={{ paddingRight: '10px' }} />
                        Submit
                    </Button>
                </ButtonGroup>
            );
        } else if (contentState === RESULTS) {
            return (
                <React.Fragment>
                    <Link to="/">
                        <Fab
                            style={{ width: '140px' }}
                            variant="extended"
                            onClick={handleShowAnswer}
                            size="medium"
                            className={classes.margin}
                        >
                            Home
                        </Fab>
                    </Link>
                </React.Fragment>
            );
        }
    };

    return (
        <div>
            <div className={classes.block} style={style.header}>
                <h1>{data.title}</h1>
            </div>
            <div style={dynamicPadding} className={classes.quizBody}>
                {renderContentBody()}
            </div>
            <div className={classes.block} style={style.footer}>
                <div className={classes.buttons}>{renderActions()}</div>
            </div>
            <Modal open={isModalOpen} onClose={closeModal}>
                <div style={style.modal} className={classes.modal}>
                    <ErrorOutline style={{ fontSize: '3em' }} />
                    <h2>Quiz Incomplete</h2>
                    <p>You must answer all questions before submitting.</p>
                </div>
            </Modal>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        quiz: state.quiz
    };
};

export default connect(mapStateToProps)(QuizContents);
