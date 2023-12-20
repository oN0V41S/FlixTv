import Image from "next/image";

<<<<<<< HEAD
// Carrosel
import Slider from "react-slick";
import "@/styles/MediaCarrousel/mdcarousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
=======
// Carrosel 
import Slider from "react-slick"
import '@/styles/MediaCarrousel/mdcarousel.css'
import 'slick-carousel/slick/slick.css';
import 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
>>>>>>> 3a8a23f6fc75eed369043664f1398e541bf928af

import Naruto from "@/../../public/media/naruto.png";
import Sasuke from "@/../public/media/sasuke.jpg";

export default function MdCaroussel({ categoria }) {
  const settings = {
    className: "center",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4.01,
    slidesToScroll: 3,
  };

<<<<<<< HEAD
  return (
    <section>
      <h2 className="text-xl font-bold">{categoria}</h2>
      <Slider {...settings}>
        <Media name="ex1" src={Naruto} />
        <Media name="ex2" src={Sasuke} />
        <Media name="ex3" src={Naruto} />
        <Media name="ex4" src={Sasuke} />
        <Media name="ex5" src={Naruto} />
      </Slider>
    </section>
  );
}
=======
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5.1,
        slidesToScroll: 2,
    }
>>>>>>> 3a8a23f6fc75eed369043664f1398e541bf928af

function Media({ name, src }) {
  return (
    <div id="media" className="text-center w-60 m-4  ">
      <Image alt="" src={src} className="rounded-xl w-24 lg:w-full" />
      <h1 className="m-auto">{name}</h1>
    </div>
  );
}
