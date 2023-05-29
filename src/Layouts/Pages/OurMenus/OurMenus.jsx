import React from 'react';
import SectionBanner from '../../ShareCompo/SectionBanner/SectionBanner';
import ourMenuIma from '../../../assets/menu/banner3.jpg'
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import Menus from '../../../Components/Menus/Menus';
import dessertImages from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImages from '../../../assets/menu/pizza-bg.jpg'
import saladImages from '../../../assets/menu/salad-bg.jpg'
import soupImages from '../../../assets/menu/soup-bg.jpg'

const OurMenus = () => {
    const [menus] = useMenu()
    const offerd = menus.filter(item => item.category === 'offered')
    const desserts = menus.filter(item => item.category === 'dessert')
    const pizza = menus.filter(item => item.category === 'pizza')
    const salads = menus.filter(item => item.category === 'salad')
    const sopus = menus.filter(item => item.category === 'soup')
    const bannerInfo = {
        title: "Our Menu",
        description: "Would you like to try a dish?",
        img: ourMenuIma
    }
    const dessertInfo = {
        title: 'dessert',
        description: "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        img: dessertImages
    }
    const pizzaInfo = {
        title: 'pizza',
        description: "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        img: pizzaImages
    }
    const salsdInfo = {
        title: 'salad',
        description: "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        img: saladImages
    }
    const soupInfo = {
        title: 'soup',
        description: "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        img: soupImages
    }
    return (
        <>
            <SectionBanner info={bannerInfo} />
            <SectionTitle title={"today's Offers"} subTitle={"Don't Miss"} />
            <Menus category={offerd} />
            <div className='container mx-auto'>
                <Menus category={desserts} bannerInfo={dessertInfo}/>
               
                
                <Menus category={pizza} bannerInfo={pizzaInfo} />
                
                
                <Menus category={salads} bannerInfo={salsdInfo} />
               
                
                <Menus category={sopus} bannerInfo={soupInfo} />
               
            </div>
        </>
    );
};

export default OurMenus;