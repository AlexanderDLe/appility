import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
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

interface Props {
    window?: () => Window;
    children: React.ReactElement;
}

function HideOnScroll(props: Props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined });
    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const useStyles = makeStyles((theme: Theme) =>
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
        backToTopRoot: {
            position: 'fixed',
            bottom: theme.spacing(2),
            right: theme.spacing(2)
        }
    })
);

function ScrollTop(props: Props) {
    const { children, window } = props;
    const classes = useStyles();
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100
    });
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const anchor = (
            (event.target as HTMLDivElement).ownerDocument || document
        ).querySelector('#back-to-top-anchor');
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
                            <Typography variant="h6" className={classes.title}>
                                &lt;REACTOR&gt;
                            </Typography>
                            <Button color="inherit">
                                <a
                                    className={classes.title}
                                    href="http://locahost:5000/auth/google"
                                >
                                    Login
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
