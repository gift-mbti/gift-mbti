import type { AppProps } from 'next/app';
import { css, Global, ThemeProvider } from '@emotion/react';
import reset from '../styles/reset';
import theme from '../styles/themes';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          ${reset}
        `}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
