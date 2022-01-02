import React, { useState } from "react";
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
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import Modal from "./Modal";

function ImageBlock({ data }) {
  const [showModal, setShowModal] = useState(false)
  const toggleModal = ()=>{
    setShowModal((showModal)=>{
      document.body.style.overflow = !showModal ? 'hidden':'scroll'
      return !showModal;
    })
  }
  return (
    <ImageContainer >
    {showModal&&<Modal data={data} callback={toggleModal}/>}
      <Image src={data.urls.small} onClick={toggleModal}/>
      <ImageAuthor>
        <AuthorProfile src={data.user.profile_image.small}></AuthorProfile>
        <AuthorDetails>
          <AuthorName>{data.user.name}</AuthorName>
          <AuthorUsername>{data.user.username}</AuthorUsername>
        </AuthorDetails>
        <ImageLikes>
          <ThumbUpOutlinedIcon fontSize="small" />
          {data.likes}
        </ImageLikes>
      </ImageAuthor>
    </ImageContainer>
  );
}

export default ImageBlock;
