import { ContainerStyled } from "../../style";
import styled from "styled-components";


export const HeaderStyled = styled(ContainerStyled)`
  display: flex;
  padding: 1em 0;
  align-items: center;
  justify-content: space-between;
`;
export const LogoStyled = styled.span`
  font-family: "Pushster", cursive;
  font-size: 1.5em;
`;
export const NavStyled = styled.nav``;
export const NavItemStyled = styled.a`
  margin-right: 1em;
  text-decoration: none;
  font-weight: 500;
  display: inline-block;
  color:#000;
  &:hover{
    color:#666;
  }
  `;
export const SearchBarStyled = styled.div`
border:1px solid #ccc;
width: 400px;
display: inline-flex;
gap:5px;
border-radius: 5px;
box-shadow: inset 0px 0px 20px 5px #e8e8e8bf;
padding:0.3em 0.8em;
align-items: center;
`
export const SearchBarInput = styled.input`
width: 100%;
  border:none;
  color:#000;
  letter-spacing: 1px;
  outline: none;
  &::placeholder{
      color:#ccc;
  }
`;
