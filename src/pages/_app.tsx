import { ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import { theme } from "../styles/themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
