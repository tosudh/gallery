import axios from "axios";
import React from "react";
import Banner from "./Banner";
import { ImageSection } from "./body.style";
import ImageBlock from "./ImageBlock";
import { data } from "./imgData";

function Gallery() {
  // axios.get('https://api.unsplash.com/photos/?client_id=TsoDhxKXHoDWzFB3PtCUaFqxhsEkmHEJvy_QqNP3OBQ').then(data=>{
  //     // data.data.forEach(i=>console.log(i))
  //     console.log(data)
  // })

  return (
    <div>
      <Banner></Banner>
      <ImageSection>
        {data.map((img) => (
          <ImageBlock key={img.id} data={img} />
        ))}
      </ImageSection>
    </div>
  );
}

export default Gallery;
