/* eslint-disable no-unused-vars */
import { createMuiTheme } from '@material-ui/core/styles';

export enum fontWeight {
  normal = 400,
  mediumOne = 500,
  mediumTwo = 600,
  bold = 700,
}

// export enum fontFamily {
//   lato = 'Lato',
// }

export interface IColors {
  primary: string;
  // secondary: string;
  text: string;
  white: string;
}

export const colors: IColors = {
  primary: '#243F96',
  text: '#333333',
  white: '#FFFFFF',
};

export const appTheme = createMuiTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    // secondary: {
    //     main: colors.secondary,
    // }

    text: {
      primary: colors.text,
      //, secondary: colors.white
    },
  },
  typography: {
    // fontFamily: fontFamily.lato,
    body1: {
      fontSize: 14,
      fontWeight: fontWeight.normal,
    },
    body2: {
      fontSize: 24,
      fontWeight: fontWeight.normal,
    },
    button: {
      fontSize: 16,
    },
    h1: {
      fontSize: 74,
      fontWeight: fontWeight.bold,
      lineHeight: '120.8%',
    },
    h2: {
      fontSize: 74,
      fontWeight: fontWeight.bold,
      lineHeight: '120.8%',
    },
    h3: {
      fontSize: 50,
      //   fontFamily: fontFamily.lato,
    },
    h4: {
      fontSize: 24,
      fontWeight: fontWeight.mediumTwo,
    },
    h5: {
      fontSize: 20,
      fontWeight: fontWeight.bold,
    },
    h6: {
      fontSize: 14,
      fontWeight: fontWeight.bold,
    },
  },
});