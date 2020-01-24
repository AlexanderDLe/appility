import React from 'react';
import { theme } from '../../styles/theme';
import { makeStyles, TextField } from '@material-ui/core';

const useStyles = makeStyles({
    textField: {
        width: '85%',
        maxWidth: '350px',
        margin: '10px'
    },
    notchedOutline: {
        borderWidth: '1px',
        borderColor: theme.palette.secondary.light
    }
});

export default props => {
    const classes = useStyles();

    return (
        <TextField
            /// PROPERTIES ///
            error={props.error}
            helperText={props.helperText}
            name={props.name}
            inputRef={props.registration}
            label={props.label}
            type={props.type}
            variant="outlined"
            color="secondary"
            className={classes.textField}
            /// STYLES ///
            InputLabelProps={{
                style: { color: theme.palette.secondary.light }
            }}
            InputProps={{
                classes: { notchedOutline: classes.notchedOutline }
            }}
            inputProps={{
                style: { color: 'white' }
            }}
        />
    );
};
