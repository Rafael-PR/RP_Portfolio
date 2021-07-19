
import { createMuiTheme } from '@material-ui/core/styles';

const font ="'Poppins', sans-serif";

const theme = createMuiTheme({

    palette: {
      primary: {
        main: '#ffffff',
      },
      secondary: {
        main: '#494846',
        contrastText: '#000',
        dark: '#ba000d',
      },
    },
    typography: {
        fontFamily:font,
        h5:{
            fontSize:"1.3rem",
            fontWeight:"bold",
        },
    },
    
  });
  
  export default theme;