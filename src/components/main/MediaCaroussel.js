import Image from "next/image";

// Carrosel
import Slider from "react-slick";
import "@/styles/MediaCarrousel/mdcarousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Naruto from "@/../../public/media/naruto.png";
import Sasuke from "@/../public/media/sasuke.jpg";

export default function MdCaroussel({ categoria }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
  };

  return (
    <section>
      <h2 className="text-xl font-bold">{categoria}</h2>
      <Slider {...settings}>
        <Media name="ex1" src={Naruto} />
        <Media name="ex2" src={Sasuke} />
        <Media name="ex3" src={Naruto} />
        <Media name="ex4" src={Sasuke} />
        <Media name="ex5" src={Naruto} />
        <Media name="ex6" src={Sasuke} />
      </Slider>
    </section>
  );
}

function Media({ name, src }) {
  return (
    <div id="media" className="text-center w-60 m-4  ">
      <Image alt="" src={src} className="rounded-xl w-16 md:w-24 lg:w-full" />
      <h1 className="m-auto">{name}</h1>
    </div>
  );
}
