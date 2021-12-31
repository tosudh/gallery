import React from "react";
import {
  AuthorDetails,
  AuthorName,
  AuthorProfile,
  AuthorUsername,
  Image,
  ImageAuthor,
  ImageContainer,
  ImageLikes,
} from "./body.style";

function ImageBlock({ data }) {
  return (
    <ImageContainer>
      <Image src={data.urls.small} />
      <ImageAuthor>
        <AuthorProfile src={data.user.profile_image.small}></AuthorProfile>
        <AuthorDetails>
          <AuthorName>{data.user.name}</AuthorName>
          <AuthorUsername>{data.user.username}</AuthorUsername>
        </AuthorDetails>
        <ImageLikes>{data.likes}</ImageLikes>
      </ImageAuthor>
    </ImageContainer>
  );
}

export default ImageBlock;
