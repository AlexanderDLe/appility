import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
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
            fontFamily: 'Audiowide',
            color: 'yellow'
        },
        navButtons: {
            fontFamily: 'Audiowide',
            color: 'white',
            textDecoration: 'none'
        },
        backToTopRoot: {
            position: 'fixed',
            bottom: theme.spacing(2),
            right: theme.spacing(2)
        }
    })
);

let logoStyle = {
    paddingRight: '20px'
};

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

export default function NavBar() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <HideOnScroll>
                <AppBar position="sticky">
                    <Container>
                        <Toolbar>
                            <img style={logoStyle} alt="logo" src={logo} />
                            <Typography variant="h6" className={classes.title}>
                                &lt;REACTOR&gt;
                            </Typography>
                            <Button color="inherit">
                                <a
                                    className={classes.navButtons}
                                    href="/auth/google"
                                >
                                    Tests
                                </a>
                            </Button>
                            <Button color="inherit">
                                <a
                                    className={classes.navButtons}
                                    href="/auth/google"
                                >
                                    Login
                                </a>
                            </Button>
                            <Button color="inherit">
                                <a
                                    className={classes.navButtons}
                                    href="/auth/google"
                                >
                                    Register
                                </a>
                            </Button>
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
}
