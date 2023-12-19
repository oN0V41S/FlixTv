import Slider from "react-slick";

const MdCaroussel = () => {
    render() {
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 3
        };
        return (
          <section>
            <h2>Comédia</h2>
            <Slider >
                <div>
                    <h1>Ex1</h1>
                    <Image src={} alt="ex1"/>
                </div>
                <div>
                    <h1>Ex2</h1>
                    <Image src={} alt="ex1"/>
                </div>
            </Slider>
          </section>
        );
    }
}