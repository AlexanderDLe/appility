import React from 'react';
import { theme } from '../../styles/theme';
import { TextField } from '@material-ui/core';
import { authTextFieldStyles } from './AuthStyles';

export default props => {
    const classes = authTextFieldStyles();

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
