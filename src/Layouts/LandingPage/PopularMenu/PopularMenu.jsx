import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slideImg1 from '../../../assets/home/slide1.jpg'
import slideImg2 from '../../../assets/home/slide2.jpg'
import slideImg3 from '../../../assets/home/slide3.jpg'
import slideImg4 from '../../../assets/home/slide4.jpg'
import slideImg5 from '../../../assets/home/slide5.jpg'
const PopularMenu = () => {
    
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000,
       

    };
    return (
        <div className='container mx-auto my-12 '>
            <Slider {...settings}>
                <div className='w-80 h-[450px] ' >
                    <img className='h-full w-[320px] rounded-md' src={slideImg1} alt="Popular Item Images" />
                    <h1 className='text-3xl font-semibold text-center -mt-16 text-white uppercase'>Salads</h1>
                </div>
                <div className='w-80 h-[450px] ' >
                    <img className='h-full w-[320px] rounded-md' src={slideImg2} alt="Popular Item Images" />
                    <h1 className='text-3xl font-semibold text-center -mt-16 text-white uppercase'>Pizza</h1>
                </div>
                <div className='w-80 h-[450px] ' >
                    <img className='h-full w-[320px] rounded-md' src={slideImg3} alt="Popular Item Images" />
                    <h1 className='text-3xl font-semibold text-center -mt-16 text-white uppercase'>Soups</h1>
                </div>
                <div className='w-80 h-[450px] ' >
                    <img className='h-full w-[320px] rounded-md' src={slideImg4} alt="Popular Item Images" />
                    <h1 className='text-3xl font-semibold text-center -mt-16 text-white uppercase'>desserts</h1>
                </div>
                <div className='w-80 h-[450px]' >
                    <img className='h-full w-[320px] rounded-md' src={slideImg5} alt="Popular Item Images" />
                    <h1 className='text-3xl font-semibold text-center -mt-16 text-white uppercase'>Salads</h1>
                </div>
            </Slider>
        </div>
    );
};

export default PopularMenu;