import React from "react";
import Header from "./Comp/Header/Header";

import { ThemeProvider } from "styled-components";
import { AppStyled, GlobalStyle, theme } from "./style";
import Gallery from "./Comp/Body/Gallery";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <AppStyled>
        <Header/>
        <Gallery/>
        {/* <h1>Image Gallery ::::::</h1> */}
        
        </AppStyled>
    </ThemeProvider>
  );
}

export default App;
