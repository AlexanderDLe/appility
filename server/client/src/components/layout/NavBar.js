import React from 'react';
import { connect } from 'react-redux';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../actions';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import logo from '../../img/Logo.png';

function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined });
    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}
function ScrollTop(props) {
    const { children, window } = props;
    const classes = useStyles();
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100
    });
    const handleClick = event => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            '#back-to-top-anchor'
        );
        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };
    return (
        <Zoom in={trigger}>
            <div
                onClick={handleClick}
                role="presentation"
                className={classes.backToTopRoot}
            >
                {children}
            </div>
        </Zoom>
    );
}

const useStyles = makeStyles(theme =>
    createStyles({
        root: {
            flexGrow: 1
        },
        menuButton: {
            marginRight: theme.spacing(2)
        },
        title: {
            flexGrow: 1,
            fontFamily: 'Audiowide'
        },
        buttons: {
            fontFamily: 'Audiowide',
            textDecoration: 'none',
            color: 'white'
        },
        backToTopRoot: {
            position: 'fixed',
            bottom: theme.spacing(2),
            right: theme.spacing(2)
        },
        logoStyle: {
            paddingRight: '25px'
        }
    })
);

const NavBar = props => {
    const classes = useStyles();
    const logOutUser = () => {
        props.logoutUser();
    };

    const renderNavigation = () => {
        if (props.auth.isAuthenticated) {
            return (
                <React.Fragment>
                    <Button color="inherit">
                        <Link to="/quizscores" className={classes.buttons}>
                            Scores
                        </Link>
                    </Button>
                    <Button color="inherit">
                        <Link
                            to="/"
                            onClick={logOutUser}
                            className={classes.buttons}
                            style={{ marginLeft: '15px' }}
                        >
                            Sign Out
                        </Link>
                    </Button>
                </React.Fragment>
            );
        } else {
            return (
                <Button color="inherit">
                    <Link to="/auth" className={classes.buttons}>
                        Sign In
                    </Link>
                </Button>
            );
        }
    };

    return (
        <React.Fragment>
            <HideOnScroll>
                <AppBar color="primary" position="sticky">
                    <Container>
                        <Toolbar>
                            <Link to="/">
                                <img
                                    className={classes.logoStyle}
                                    alt="logo"
                                    src={logo}
                                />
                            </Link>
                            <Typography variant="h6" className={classes.title}>
                                <Link to="/" className={classes.buttons}>
                                    &lt;QUIZZER&gt;
                                </Link>
                            </Typography>
                            {renderNavigation()}
                        </Toolbar>
                    </Container>
                </AppBar>
            </HideOnScroll>
            <ScrollTop>
                <Fab
                    color="secondary"
                    size="small"
                    aria-label="scroll back to top"
                >
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        auth: state.auth
    };
};

export default connect(mapStateToProps, { logoutUser })(NavBar);
