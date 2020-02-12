import React from 'react';
import { Link } from 'react-router-dom';
import getScoreGrade from '../misc/getScoreGrade';

import { QuizCardStyles } from './QuizStyles';
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

const QuizCard = ({ score, data }) => {
    const classes = QuizCardStyles();
    const [expanded, setExpanded] = React.useState(false);
    const cardColor = {
        borderLeft: `2px solid ${data.color}`,
        borderBottomLeftRadius: '16px'
    };

    const handleExpandClick = () => {
        setExpanded(!expanded);
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
        <Card style={cardColor} className={classes.card}>
            <CardHeader
                className={classes.cardHeader}
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
            <CardContent className={classes.cardContent}>
                <Typography variant="body2" component="p">
                    {data.description}
                </Typography>
            </CardContent>
            <CardActions className={classes.cardActions} disableSpacing>
                <Button size="large" color="secondary">
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

export default QuizCard;
