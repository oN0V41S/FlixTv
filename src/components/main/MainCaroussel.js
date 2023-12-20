import Image from "next/image";

// Carrosel
import Slider from "react-slick";
import "@/styles/MediaCarrousel/mdcarousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Narutobg from "@/../../public/media-bg/naruto-bg.jpeg";
import Painbg from "@/../../public/media-bg/pain-bg.jpg";

export default function MainCaroussel() {
  const settings = {
    className: "center",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <section className="w-full">
      <Slider {...settings}>
        <MainMedia src={Narutobg} />
        <MainMedia src={Painbg} />
      </Slider>
    </section>
  );
}

function MainMedia({ src }) {
  return (
    <div id="media" className="text-center w-full h-full m-4  ">
      <Image id="media_img" alt="" src={src} className="rounded-xl w-full" />
    </div>
  );
}
