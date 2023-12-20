import Image from "next/image";

// Carrosel
import Slider from "react-slick";
import "@/styles/MediaCarrousel/mdcarousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Sasuke from "@/../public/media/sasuke.jpg";

export default function MdCaroussel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <section>
      <h2 className="text-xl font-bold">Comédia</h2>
      <Slider {...settings}>
        <div className="flex flex-col items-center">
          <h1 className="text-center -mt-12">ex1</h1>
          <Image src={Sasuke} alt="ex1" className="rounded-xl w-60" />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-center -mt-12">ex1</h1>
          <Image src={Sasuke} alt="ex1" className="rounded-xl w-60" />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-center -mt-12">ex1</h1>
          <Image src={Sasuke} alt="ex1" className="rounded-xl w-60" />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-center -mt-12">ex1</h1>
          <Image src={Sasuke} alt="ex1" className="rounded-xl w-60" />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-center -mt-12">ex1</h1>
          <Image src={Sasuke} alt="ex1" className="rounded-xl w-60" />
        </div>
      </Slider>
    </section>
  );
}
