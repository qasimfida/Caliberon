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
      ],
    },
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
    gradient: 'linear-gradient(74deg, #f54c0a 40%, #e7cf285c 100%)',
  },
  shadows: [
    'none',
    '0.5rem 0.5rem black, -0.5rem -0.5rem #ccc',
    '0px 0px 6px 3px rgba(82, 67, 67, 0.33)',
    '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 2px 0px 0px rgb(0 0 0 / 12%)',
    'rgba(17, 17, 26, 0.1) 0px 0px 16px',
    'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px',
    'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px',
    'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px',
    'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px',
    'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px',
  ],
});
export default theme;
