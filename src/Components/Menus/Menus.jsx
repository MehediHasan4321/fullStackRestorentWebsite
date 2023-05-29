import React from 'react';
import MenuCard from '../MenuCard/MenuCard';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import SectionBanner from '../../Layouts/ShareCompo/SectionBanner/SectionBanner';

const Menus = ({ category,bannerInfo }) => {
    
    return (
        <div className='container mx-auto'>
            {bannerInfo && <SectionBanner info={bannerInfo}/>}
            <div className='grid md:grid-cols-2 my-12'>
                {
                    category.map(menu => <MenuCard key={menu._id} item={menu} />)
                }

            </div>
            <Link to={`/order/${bannerInfo?.title}`}><Button text='Order Your Favourite Food' /></Link>
        </div>
    );
};

export default Menus;