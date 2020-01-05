import { createMuiTheme } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';
import amber from '@material-ui/core/colors/amber';

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: grey[900]
        },
        secondary: {
            main: amber[300]
        }
    },
    type: 'dark'
});
