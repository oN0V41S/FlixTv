import React from "react";
import { Carousel, Image } from "react-bootstrap";  

export default function CarouselMedia(){
  const images = [
    {
      url: "../../../public/naturo.png",
    },
    {
      url: "../../../public/naturo.png",
    },
    {
      url: "../../../public/naturo.png",
    },
  ];

    return (
      <Carousel>
      {images.map((image) => (
        <Image key={image.url} src={image.url} />
      ))}
    </Carousel>
    )
}