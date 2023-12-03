import "normalize.css";
import { AppProps } from "next/app";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../assets/styles/mui_theme';
import "../../public/styles/global.css";
import '../assets/styles/_index.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
    <Component {...pageProps} />
    </ThemeProvider>
  );
}
