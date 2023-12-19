import Image from "next/image"

// Carrosel 
import Slider from "react-slick"
// import '@/styles/MediaCarrousel/mdcarousel.css'
import 'slick-carousel/slick/slick.css';

import Sasuke from '@/../public/media/sasuke.jpg'

export default function MdCaroussel() {    

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        
    }

    return (
        <section>
            <h2 className="text-xl font-bold">Comédia</h2>
            <Slider {...settings}>
                <div className="relative">
                    <h1 className="text-center -mt-12">ex1</h1>
                    <Image src={Sasuke} alt="ex1" className="rounded-md w-64"/>
                </div>
                <div className="w-14">
                    <h1>ex2</h1>
                    <Image src={Sasuke} alt="ex2" />
                </div>
                <div className="w-14">
                    <h1>ex2</h1>
                    <Image src={Sasuke} alt="ex2" />
                </div>
                <div className="w-14">
                    <h1>ex2</h1>
                    <Image src={Sasuke} alt="ex2" />
                </div>
                <div className="w-14">
                    <h1>ex2</h1>
                    <Image src={Sasuke} alt="ex2" />
                </div>
                <div className="w-14">
                    <h1>ex2</h1>
                    <Image src={Sasuke} alt="ex2" />
                </div>
            </Slider>
        </section >
    );
};
