import { createTheme } from '@mui/material/styles';

let theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            color: '#fff',
            background: '#f54c0a',
            textTransform: 'none',
          },
        },
        {
          props: { variant: 'outlined' },
          style: {
            color: '#000',
            backgroundColor: '#fff',
            textTransform: 'none',
            borderColor: '#fff',
            '&:hover': {
              borderColor: '#fff',
              color: '#fff',
            },
          },
        },
        {
          props: { variant: 'text' },
          style: {
            color: '#444',
            '&:hover': {
              background: 'transparent',
              color: '#f54c0a',
            },
          },
        },
      ],
    },
  },
  typography: {
    fontFamily: [
      'Poppins',
      'sans-serif'
    ].join(','),
  },
  palette: {
    primary: {
      main: '#f54c0a',
    },
    secondary: {
      main: '#edf2ff',
    },
    white: {
      main: '#fff',
    },
    lightGray: {
      main: '#748494',
    },
    darkGray: {
      main: '#444',
    },
    mediumGray: {
      main: '#d6d6d7',
    },
    black: {
      main: '#000000',
    },
    lightnessWhite: {
      main: '#F6F6F6',
    },
    gray93: {
      main: '#ededed',
    },
    darkBlack: {
      main: '#02050b',
    }
  },
});
export default theme;
