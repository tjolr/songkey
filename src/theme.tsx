import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import { orange } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: orange[300],
    },
    secondary: {
      main: green[500],
    },
    backgroundColor: {
      light: '#464646',
      main: '#323232',
      dark: '#282828',
    },
    type: 'dark',
  },
});
export default theme;
