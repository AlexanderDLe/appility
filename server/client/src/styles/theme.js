import { createMuiTheme } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';
import amber from '@material-ui/core/colors/amber';

export const theme = createMuiTheme({
    overrides: {
        MuiInputBase: {
            input: {
                '&:-webkit-autofill': {
                    transitionDelay: '9999s',
                    transitionProperty: 'background-color, color'
                }
            }
        }
    },
    palette: {
        primary: {
            main: grey[900],
            light: grey[800]
        },
        secondary: {
            light: amber[100],
            main: amber[200],
            dark: amber[500]
        }
    },
    type: 'dark'
});
