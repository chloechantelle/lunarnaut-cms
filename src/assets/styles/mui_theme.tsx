import { createTheme } from '@mui/material/styles';
import Arame from '../fonts/Arame.ttf';

export const theme = createTheme({
    palette: {
      primary: {
        main: '#111111',
      },
      secondary: {
        main: '#ffffff',
      },
    },
    // Typography
    typography: {
      fontFamily: [
        'Arame', 'monospace',
      ].join(','),
    },
    // Components
    components: {
      MuiToolbar: {
        defaultProps: {
          disableGutters: true,
        }
      }
    }
  });