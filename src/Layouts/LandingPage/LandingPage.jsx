import React from 'react';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import Menu from './Menu/Menu';
import bannerImg from '../../assets/home/chef-service.jpg'
import Banner from './Banner/Banner';
import PopularMenu from './PopularMenu/PopularMenu';
import ChefRecommends from './ChefRecommends/ChefRecommends';
import Featured from './Featured/Featured';
import Testemnial from './Testemonial/Testemnial';
import SectionBanner from '../ShareCompo/SectionBanner/SectionBanner';
const LandingPage = () => {
    const bannerInfo =  {
        title:'Spicy King',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.',
        img: bannerImg
    }
    return (
        <div>
            <Banner/>
            <SectionTitle title={'ORDER ONLINE'} subTitle={'From 11:00am to 10:00pm'}/>
            <PopularMenu/>
            <div className='container mx-auto pt-12'>
            <SectionBanner info={bannerInfo}/>
            </div>
            <Menu/>
            <ChefRecommends/>
            <Featured/>
            <Testemnial/>
        </div>
    );
};

export default LandingPage;