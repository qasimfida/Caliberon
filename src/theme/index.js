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
            color: '#fff',
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
              color: '#f15c27',
            },
          },
        },
        {
          props: { variant: 'dark' },
          style: {
            backgroundColor: '#323232',
            color: '#fff',
            padding: '15px 32px',
            letterSpacing: '1.3px',
            '&:hover': {
              background: '#11141b',
            },
          },
        },
        {
          props: { variant: 'light' },
          style: {
            backgroundColor: 'transparent',
            color: 'black',
            fontWeight: '400',
            border: '2px solid #f15c27',
            '&:hover': {
              color: '#fff',
              background: '#f15c27',
              border: '2px solid transparent',
            },
          },
        },
      ],
    },
  },
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      main: '#f15c27',
    },
    secondary: {
      main: '#edf2ff',
    },
    white: {
      main: '#fff',
    },
    lightGray: {
      main: '#748494',
      100: '#363636',
    },
    darkGray: {
      main: '#444',
    },
    mediumGray: {
      main: '#d6d6d7',
      100: '#d5d5d5',
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
      main: '#0c0f16',
    },
    very_black: {
      main: '#11141b',
    },
    dark_black: {
      main: '#0c0f16',
    },
    hover_color: {
      main: '#4d4d4d',
    },
    text_light: {
      main: '#c8c8c8',
    },
  },
});
export default theme;
