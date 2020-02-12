import React from 'react';
import { connect } from 'react-redux';
import getScoreGrade from '../misc/getScoreGrade';
import { resetScore } from '../../actions';

import { ScoreTableStyles } from './ScoreStyles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import LoopIcon from '@material-ui/icons/Loop';
import { Button } from '@material-ui/core';

const createScoreRows = data => {
    let result = [];
    for (let item in data) {
        const { scoreLetter, color } = getScoreGrade(data[item]);
        result.push({
            name: item,
            score: data[item],
            grade: scoreLetter,
            color: color
        });
    }
    return result;
};

const MyTableCell = ({ children }) => {
    const style = { color: 'white' };
    return (
        <TableCell align="right" style={style}>
            {children}
        </TableCell>
    );
};

const ScoreTable = ({ quiz, resetScore }) => {
    const classes = ScoreTableStyles();
    let rows = createScoreRows(quiz);

    const handleResetScore = (quiz, score) => {
        if (score !== null) {
            resetScore(quiz);
        }
    };

    return (
        <Table className={classes.table} aria-label="caption table">
            <TableHead>
                <TableRow>
                    <TableCell className={classes.cell}>Quiz Name</TableCell>
                    <MyTableCell>Highest Score</MyTableCell>
                    <MyTableCell>Grade</MyTableCell>
                    <MyTableCell>
                        <p style={{ marginRight: '18px' }}>Reset</p>
                    </MyTableCell>
                </TableRow>
            </TableHead>
            <TableBody style={{ width: '100%' }}>
                {rows.map(row => (
                    <TableRow key={row.name}>
                        <TableCell
                            className={classes.cell}
                            component="th"
                            scope="row"
                        >
                            {row.name}
                        </TableCell>
                        <MyTableCell>{row.score}</MyTableCell>
                        <MyTableCell>
                            <p style={{ color: row.color }}>{row.grade}</p>
                        </MyTableCell>
                        <MyTableCell>
                            <Button
                                onClick={() =>
                                    handleResetScore(row.name, row.score)
                                }
                                style={{ color: 'white' }}
                            >
                                <LoopIcon className={classes.resetIcon} />
                            </Button>
                        </MyTableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

const mapStateToProps = state => {
    return {
        quiz: state.quiz
    };
};

export default connect(mapStateToProps, { resetScore })(ScoreTable);
