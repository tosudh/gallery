import React from "react";
import Banner from "./Banner";
import { ImageColumn, ImageSection } from "./body.style";
import ImageBlock from "./ImageBlock";
import { data } from "./imgData";

function Gallery() {

  let imgArray=[] 
  let cols=3
  for (let index = 0; index < cols; index++) {
    imgArray.push(data.map((img,i)=>(i%cols===index&&<ImageBlock key={img.id} data={img}/>)))
  }

  return (
    <div>
      <Banner></Banner>
      <ImageSection>
      {imgArray.map((imgs,i)=>(<ImageColumn key={i} >{imgs}</ImageColumn>))}
      </ImageSection>
    </div>
  );
}

export default Gallery;
