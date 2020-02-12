import React from 'react';
import { connect } from 'react-redux';
import { setLoading } from '../../actions';
import { useMediaQuery } from '@material-ui/core';
import { ScoreContentStyles } from './ScoreStyles';
import { LinearProgress } from '@material-ui/core';
import ScoreTable from './ScoreTable';

const useMinWidthQuery = query => {
    if (query) return { padding: '24px' };
    else return { padding: '6px' };
};

const ScoreContents = ({ feedback }) => {
    const classes = ScoreContentStyles();
    const minWidthQuery = useMediaQuery('(min-width:500px)');
    const dynamicPadding = useMinWidthQuery(minWidthQuery);

    const displayLoadingBar = () => {
        if (feedback.loading) {
            return (
                <div
                    style={{ paddingTop: '24px' }}
                    className={classes.feedback}
                >
                    <LinearProgress
                        className={classes.loader}
                        color="primary"
                    />
                </div>
            );
        }
    };

    return (
        <React.Fragment>
            <div className={classes.header}>
                <h1 className={classes.header}>SCORES</h1>
            </div>
            <div style={dynamicPadding} className={classes.scoreBody}>
                <ScoreTable />
                {displayLoadingBar()}
            </div>
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        feedback: state.feedback
    };
};

export default connect(mapStateToProps, { setLoading })(ScoreContents);
