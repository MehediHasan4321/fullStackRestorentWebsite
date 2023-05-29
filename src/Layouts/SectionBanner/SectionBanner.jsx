import React from 'react';
import bannerImg from '../../assets/home/chef-service.jpg'
const Banner2 = () => {
    return (
        <div className=' container mx-auto h-[570px] p-32' style={{backgroundImage:`url(${bannerImg})`,backgroundPosition:'center',backgroundRepeat:'no-repeat'}}>
            <div className='w-full h-full bg-white bg-opacity-90'>
                <div className='w-2/3 py-24 mx-auto space-y-5'>
                    <h1 className='text-4xl text-center'>Spicy King</h1>
                    <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner2;