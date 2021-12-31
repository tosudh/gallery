import { ContainerStyled } from "../../style";
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
  /* max-width: 25%; */
  padding: 2em;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`;
export const ImageContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 1em;
`;
export const Image = styled.img`
  border: none;
  border-radius: 8px 8px 0 0;
  max-width: 100%;
  width: 100%;
  /* z-index: -1; */
`;
export const ImageAuthor = styled.div`
  display: inline-flex;
  padding: 1em;
  gap: 10px;
  width: 100%;
  justify-content: space-between;
  align-items:center;
`;
export const AuthorDetails = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 100%;
`;
export const AuthorProfile = styled.img`
  max-width: 32px;
  border-radius:50%;
`;
export const AuthorName = styled.span`
  color: black;
  font-weight: 500;
`;
export const AuthorUsername = styled.span`
  color: grey;
  font-weight: 400;
  &:before {
    content: "@";
  }
`;
export const ImageLikes = styled.span`
  max-width: 32px;
  display: inline-flex;
  &:before {
    content: "👍";
  }
`;
