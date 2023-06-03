import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bannerImg1 from '../../../assets/home/01.jpg'
import bannerImg2 from '../../../assets/home/02.jpg'
import bannerImg3 from '../../../assets/home/03.png'
import bannerImg4 from '../../../assets/home/04.jpg'
import bannerImg5 from '../../../assets/home/05.png'

import Slider from "react-slick";


const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 4000,
      }
    return (
        <div>
            <Slider {...settings}>
            <div className="h-[90vh]">
                <img className="h-full w-full" src={bannerImg1} alt="" />
            </div>
            <div className="h-[90vh] w-full">
                <img className="h-full w-full" src={bannerImg2} alt="" />
            </div>
            <div className="h-[90vh]">
                <img className="h-full w-full" src={bannerImg3} alt="" />
            </div>
            <div className="h-[90vh]">
                <img className="h-full w-full" src={bannerImg4} alt="" />
            </div>
            <div className="h-[90vh]">
                <img className="h-full w-full" src={bannerImg5} alt="" />
            </div>
        </Slider>
        </div>
        
    );
};

export default Banner