import React from 'react';
import { connect } from 'react-redux';
import getScoreGrade from '../misc/getScoreGrade';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import LoopIcon from '@material-ui/icons/Loop';

const useStyles = makeStyles(theme => ({
    table: {
        backgroundColor: theme.palette.primary.main,
        color: 'white'
    },
    cell: {
        color: 'white'
    },
    resetIcon: {
        cursor: 'pointer'
    }
}));

const createScoreRows = data => {
    let result = [];

    for (let item in data) {
        // if (data[item] !== null) {
        const { scoreLetter } = getScoreGrade(data[item]);
        console.log(scoreLetter);
        result.push({ name: item, score: data[item], grade: scoreLetter });
        // }
    }
    console.log(result);
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

const ScoreTable = ({ quiz }) => {
    const classes = useStyles();
    console.log(quiz);
    let rows = createScoreRows(quiz);
    return (
        <Table className={classes.table} aria-label="caption table">
            <TableHead>
                <TableRow>
                    <TableCell className={classes.cell}>Quiz Name</TableCell>
                    <MyTableCell align="right">Highest Score</MyTableCell>
                    <MyTableCell align="right">Grade</MyTableCell>
                    <MyTableCell align="right">Reset</MyTableCell>
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
                        <MyTableCell align="right">{row.score}</MyTableCell>
                        <MyTableCell align="right">{row.grade}</MyTableCell>
                        <MyTableCell align="right">
                            <LoopIcon className={classes.resetIcon} />
                        </MyTableCell>
                    </TableRow>
                ))}

                <div
                    style={{
                        width: '100%',
                        padding: '15px',
                        fontWeight: 'bold'
                    }}
                >
                    Reset All
                </div>
            </TableBody>
        </Table>
    );
};

const mapStateToProps = state => {
    return {
        quiz: state.quiz
    };
};

export default connect(mapStateToProps)(ScoreTable);
