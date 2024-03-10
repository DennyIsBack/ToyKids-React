import { createTheme } from '@mui/material';
import { yellow } from '@mui/material/colors';

export const lightTheme = createTheme({
    palette: {
        primary: {
            main: yellow[700],
            dark: yellow[800],
            light: yellow[500],
            constrastText: '#ffffff'
        }
    }
});