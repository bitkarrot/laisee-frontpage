import '../styles/index.css'
import { ThemeProvider } from 'next-themes'

export default function MyApp({ Component, pageProps }) {
  return (
  <ThemeProvider forcedTheme={Component.theme || undefined} attribute="class">

      <Component {...pageProps} />
    </ThemeProvider>
  )
}

