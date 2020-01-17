import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setQuiz } from '../../actions';
import getScoreGrade from './getScoreGrade';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
        margin: '0 auto',
        backgroundColor: 'rgb(22, 22, 22)',
        color: 'white'
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

const QuizCard = ({ score, data, setQuiz }) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleQuizClick = () => {
        setQuiz(data.label);
    };

    const { scoreLetter, color } = getScoreGrade(score);
    const avatarStyle = {
        backgroundColor: 'rgb(22, 22, 22)',
        color: color,
        fontFamily: 'Audiowide',
        fontSize: '1.8em'
    };

    const param = data.param;
    return (
        <Card className={classes.card}>
            <CardHeader
                avatar={
                    <Avatar aria-label="JavaScript" style={avatarStyle}>
                        {scoreLetter ? scoreLetter : '-'}
                    </Avatar>
                }
                title={data.title}
            />
            <CardMedia
                className={classes.media}
                image={require(`../../img/${data.image}`)}
                title="JavaScript"
            />
            <CardContent>
                <Typography variant="body2" component="p">
                    {data.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Button
                    onClick={handleQuizClick}
                    size="large"
                    color="secondary"
                >
                    <Link className={classes.link} to={`/quiz/${param}`}>
                        Take Quiz
                    </Link>
                </Button>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>{data.dropdownText()}</CardContent>
            </Collapse>
        </Card>
    );
};

export default connect(null, { setQuiz })(QuizCard);
