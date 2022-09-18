import { createTheme } from '@mui/material/styles';
import { blueGrey } from '@mui/material/colors';


export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#f2f0f0'
    },
    secondary: {
      main: '#356c7a'
    },
    info: {
      main: '#d0cdd4'
    },

    

  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
        position: 'fixed',
      },
      styleOverrides: {
        root: {
          backgroundColor: blueGrey[700],
          height: 60
        },
      }
    },

    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: 30,
          fontWeight: 600
        },
        h2: {
          fontSize: 20,
          fontWeight: 400
        },
        subtitle1: {
          fontSize: 18,
          fontWeight: 600
        }
      }
    },


    MuiButton: {
      defaultProps: {
        variant: 'contained',
        size: 'medium',
        disableElevation: true,
        color: 'info'
      },
      styleOverrides: {
        root: {
      
          textTransform: 'none',
          boxShadow: 'none',
          borderRadius: 8,
          ":hover": {
            backgroundColor: 'rgba(0,0,0,0.05)',
            transition: 'all 0.3s ease-in-out'
          }
        }
      }
    },


    MuiCard: {
      defaultProps: {
        elevation: 0
      },
      styleOverrides: {
        root: {
          boxShadow: '0px 5px 5px rgba(0,0,0,0.05)',
          borderRadius: '10px',
        }
      }
    },
   
    
  }
});