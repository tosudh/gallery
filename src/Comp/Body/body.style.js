// import { ContainerStyled } from "../../style";
import styled from "styled-components";

export const BannerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  gap: 10px;
  text-shadow: 1px 1px #000;
  background-image: url(${(props) => props.bg});
  height: 50vh;
  background-repeat: no-repeat;
  width: 100%;
  background-size: cover;
  /* background-attachment: fixed; */
  background-position: center;
`;

export const ImageSection = styled.div`
  /* border: 1px solid green; */
  padding: 2em;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 4em;
`;

export const ImageColumn = styled.div`
  flex: 20%;
  /* border: 1px solid red; */
  /* gap:150px; */
  margin: 1em;

`;
export const ImageContainer = styled.div`
  /* border: 1px solid #ccc; */
  border-radius: 8px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 2em;
`;
export const Image = styled.img`
  border: none;
  border-radius: 8px 8px 0 0;
  max-width: 100%;
  width: 100%;
`;
export const ImageAuthor = styled.div`
  display: inline-flex;
  padding: 0.6em 0.8em;
  gap: 15px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ccc;
  border-radius:0 0 8px 8px ;

`;
export const AuthorDetails = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 100%;
`;
export const AuthorProfile = styled.img`
  max-width: 32px;
  border-radius: 50%;
`;
export const AuthorName = styled.span`
  color: black;
  font-weight: 500;
`;
export const AuthorUsername = styled.span`
  color: grey;
  font-weight: 400;
  font-size: 0.8em;
  padding-top: 2px;
  font-style: italic;

  &:before {
    content: "@";
  }
`;
export const ImageLikes = styled.span`
  display: inline-flex;
  gap:2px;
  align-items: center;
`;
