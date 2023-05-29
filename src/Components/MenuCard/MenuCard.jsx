import React from 'react';

const MenuCard = ({item}) => {
 
    return (
        <div className='w-[648px] h-20 flex gap-5 my-10'>
            <img className='w-[118px] h-full bg-[#f2f2f2] ' style={{borderRadius:'0 200px 200px 200px'}} src={item.image} alt="menu images" />
            <div>
                <div className='flex justify-between items-center'>
                <h1 className='text-xl font-semibold'>{item.name}</h1>
                <p className=' text-yellow-500'>${item.price}</p>
                </div>
                <p>{item.recipe}</p>
            </div>
        </div>
    );
};

export default MenuCard;