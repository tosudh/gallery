import axios from "axios";
import React from "react";
import Banner from "./Banner";
import { ImageColumn, ImageSection } from "./body.style";
import ImageBlock from "./ImageBlock";
import { data } from "./imgData";

function Gallery() {
  axios.get('https://api.unsplash.com/photos/?client_id=TsoDhxKXHoDWzFB3PtCUaFqxhsEkmHEJvy_QqNP3OBQ').then(data=>{
      // data.data.forEach(i=>console.log(i))
      console.log(data)
  })

  let imgArray=[] 
  imgArray.push(data.map((img,i)=>(i%3==0 &&<ImageBlock key={img.id} data={img}/>)))
  imgArray.push(data.map((img,i)=>(i%3==1 &&<ImageBlock key={img.id} data={img}/>)))
  imgArray.push(data.map((img,i)=>(i%3==2 &&<ImageBlock key={img.id} data={img}/>)))

  return (
    <div>
      <Banner></Banner>
      <ImageSection>
      <ImageColumn>{imgArray[0]}</ImageColumn>
      <ImageColumn>{imgArray[1]}</ImageColumn>
      <ImageColumn>{imgArray[2]}</ImageColumn>
        {/* {
          data.map((img)=>(<ImageBlock key={img.id} data={img}/>))
        } */}
      </ImageSection>
    </div>
  );
}

export default Gallery;
