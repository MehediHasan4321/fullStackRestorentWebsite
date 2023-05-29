import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import FoodCard from '../../../Components/FoodCard/FoodCard';
import useMenu from '../../../Hooks/useMenu';

const ChefRecommends = () => {
    const [menus] = useMenu()
    const salads = menus.filter(item=>item.category === 'salad')
    return (
        <div className='container mx-auto mb-32'>
            <SectionTitle subTitle={'Should Try'} title={'chef recommends'}/>
            <div className='grid md:grid-cols-3 gap-5'>
                {
                    salads.slice(0,3).map(item=><FoodCard key={item._id} item={item}/>)
                }
            </div>
        </div>
    );
};

export default ChefRecommends;