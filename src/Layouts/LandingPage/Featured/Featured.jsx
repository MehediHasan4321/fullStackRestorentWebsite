import React from 'react';
import featuredImg from '../../../assets/home/featured.jpg'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import Button from '../../../Components/Button/Button';
const Featured = () => {
    return (
        <div className='w-full h-[848px]' style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${featuredImg})`,backgroundAttachment:'fixed' }}>
            <div className='container mx-auto py-16'>
                <SectionTitle title={'from Our Menu'} subTitle={'Check it Out'} titleColor='white' />
                <div className='w-full flex gap-20 items-center mt-20'>
                    <img className='w-[600px] h-[400px]' src={featuredImg} alt="" />
                    <div className='text-white w-2/5 space-y-4'>
                        <h1 className='text-2xl'>March 30 2023</h1>
                        <h1 className='text-3xl'>Where I can Get It</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <Button text='Read More'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;