import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import {
  HeaderStyled,
  LogoStyled,
  NavItemStyled,
  NavStyled,
  SearchBarInput,
  SearchBarStyled,
} from "./header.style";
import { IconButton } from "@mui/material";

function Header() {
  return (
    <HeaderStyled>
      <LogoStyled>Image Gallery</LogoStyled>
      <SearchBarStyled>
        <SearchIcon htmlColor="#ccc"/>
        <SearchBarInput type="text" placeholder="Search Images Here" />
        
        <IconButton ><ClearIcon  htmlColor="#ccc"/></IconButton>
      </SearchBarStyled>
      <NavStyled>
        <NavItemStyled>Explore</NavItemStyled>
        <NavItemStyled>Collection</NavItemStyled>
        <NavItemStyled>Community</NavItemStyled>
      </NavStyled>
    </HeaderStyled>
  );
}

export default Header;
