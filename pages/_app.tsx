import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { darkTheme } from '../components/themes'
import { UiProvider } from '../context/ui/UiProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UiProvider>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </UiProvider>
  )
}

export default MyApp
