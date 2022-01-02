import React from "react";
import Header from "./Comp/Header/Header";

import { ThemeProvider } from "styled-components";
import { AppStyled, GlobalStyle, theme } from "./style";
import Gallery from "./Comp/Body/Gallery";
import axios from "axios";

function App() {
  //   axios.get(`
  //   https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_UNSPLASH_CLIENT_ID}&per_page=100
  //   `).then(data=>{
  //     // data.data.forEach(i=>console.log(i))
  //     console.log(data)
  // })
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
