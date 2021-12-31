import styled,{ createGlobalStyle } from 'styled-components'

export const GlobalStyle=createGlobalStyle`
  *{
    padding:0;
    margin:0;
    box-sizing: border-box;
  }
  body {
    font-size: 62.5%;
  }
`
export const theme={
  light:{
      primary:'#fff',
      textColor:'#000',
  }
}


export const ContainerStyled = styled.div`
  margin:0 2em;
`
export const AppStyled = styled.div`
  font-size: 1.6em;
  background-color: ${(props)=>(props.theme.light.primary)};
  font-family:Verdana, sans-serif;
`