import React from 'react';
import { connect } from 'react-redux';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../actions';

import { useMediaQuery, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
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
            flexGrow: 1
        },
        buttons: {
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
        },
        menuIcon: {
            color: 'white'
        },
        menuItem: {
            color: 'black',
            textAlign: 'left'
        }
    })
);

const NavBar = props => {
    const classes = useStyles();
    const navMediaQuery = useMediaQuery('(min-width:600px)');
    const logOutUser = () => {
        props.logoutUser();
    };
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const renderFullNav = () => {
        if (localStorage.getItem('appilityAuth')) {
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

    const renderMenuNav = () => {
        const renderMenuItems = () => {
            if (props.auth.isVerified) {
                let navArray = [
                    <MenuItem key={0} onClick={handleClose}>
                        <Link className={classes.menuItem} to="/quizscores">
                            Scores
                        </Link>
                    </MenuItem>,
                    <MenuItem key={1} onClick={handleClose}>
                        <Link
                            className={classes.menuItem}
                            to="/"
                            onClick={logOutUser}
                        >
                            Sign Out
                        </Link>
                    </MenuItem>
                ];
                return navArray.map(element => element);
            } else {
                return (
                    <MenuItem onClick={handleClose}>
                        <Link className={classes.menuItem} to="/auth">
                            Sign In
                        </Link>
                    </MenuItem>
                );
            }
        };

        return (
            <React.Fragment>
                <IconButton onClick={handleClick}>
                    <MenuIcon className={classes.menuIcon} />
                </IconButton>
                <Menu
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    {renderMenuItems()}
                </Menu>
            </React.Fragment>
        );
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
                                    APPILITY
                                </Link>
                            </Typography>
                            {navMediaQuery ? renderFullNav() : renderMenuNav()}
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
