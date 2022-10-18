import type { AppProps } from 'next/app';
import { css, Global, ThemeProvider } from '@emotion/react';
import { SnackbarProvider } from 'notistack';
import reset from '../styles/reset';
import theme from '../styles/themes';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <SnackbarProvider>
      <ThemeProvider theme={theme}>
        <Global
          styles={css`
            ${reset}
          `}
        />
        <Component {...pageProps} />
      </ThemeProvider>
    </SnackbarProvider>
  );
};

export default MyApp;
