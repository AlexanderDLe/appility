import React from 'react';
import { theme } from '../../styles/theme';
import { makeStyles, TextField } from '@material-ui/core';

const useStyles = makeStyles({
    textField: {
        width: '85%',
        maxWidth: '350px',
        margin: '15px',
        borderColor: 'green'
    },
    notchedOutline: {
        borderWidth: '1px',
        borderColor: theme.palette.secondary.light
    },
    textDiv: {
        padding: '20px'
    },
    pointer: {
        cursor: 'pointer'
    }
});

export default function MyTextField(props) {
    const classes = useStyles();

    return (
        <TextField
            label={props.label}
            type={props.type}
            id="outlined-basic"
            variant="outlined"
            color="secondary"
            className={classes.textField}
            InputLabelProps={{
                style: {
                    color: theme.palette.secondary.light
                }
            }}
            InputProps={{
                classes: {
                    notchedOutline: classes.notchedOutline
                }
            }}
            inputProps={{
                style: {
                    '&:hover': {
                        borderColor: theme.palette.secondary.light
                    },
                    color: 'white'
                }
            }}
        />
    );
}
