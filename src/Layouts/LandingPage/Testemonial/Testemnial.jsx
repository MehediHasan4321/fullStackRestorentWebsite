import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
const Testemnial = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='container mx-auto'>
            <SectionTitle title={'TESTIMONIALS'} subTitle={'Whts Our Client Says'} />
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper my-24">
                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className='px-12 flex flex-col items-center gap-5'>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p>{review.details}</p>
                            <h1 className='text-3xl font-semibold text-yellow-400'>{review.name}</h1>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testemnial;