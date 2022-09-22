import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { css, Global } from '@emotion/react'
import reset from '../styles/reset'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Global
        styles={css`
          ${reset}
        `}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
