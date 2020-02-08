import React from 'react';
import { styled, Button } from '@material-ui/core';

export default styled(({ color, ...other }) => <Button {...other} />)({
    background: props => props.color,
    width: '85%',
    maxWidth: '350px',
    margin: '10px',
    padding: '12px'
});
