import React, { useState } from "react";
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
  const [seachTxt, setSeachTxt] = useState('')
  return (
    <HeaderStyled>
      <LogoStyled>Image Gallery</LogoStyled>
      <SearchBarStyled>
        <SearchIcon htmlColor="#ccc" />
        <SearchBarInput type="text" placeholder="Search Images Here" value={seachTxt} onChange={(e)=>{
            setSeachTxt(e.target.value)
        }}/>

        <IconButton  onClick={() => {
            setSeachTxt('')
          }}>
          <ClearIcon htmlColor="#ccc"/>
        </IconButton>
      </SearchBarStyled>
      <NavStyled>
        <NavItemStyled href="#">Explore</NavItemStyled>
        <NavItemStyled href="#">Collection</NavItemStyled>
        <NavItemStyled href="#">Community</NavItemStyled>
      </NavStyled>
    </HeaderStyled>
  );
}

export default Header;
