import GlobalStyles from "../components/theme/globalStyles";

//theme styles
import { ThemeProvider } from "styled-components";
import { Theme } from "../components/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles/>
      <Component {...pageProps} />
    </ThemeProvider>
    );
}

export default MyApp;
