import React from 'react';

const SectionBanner = ({ info }) => {
    const { img, title, description } = info || {}
    return (
        <>
            <div className='h-[570px] p-32 ' style={{ backgroundImage: `url(${img})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <div className='w-full h-full container mx-auto bg-black text-white bg-opacity-50 rounded-md'>
                    <div className='w-2/3 py-24 mx-auto space-y-5'>
                        <h1 className='text-4xl text-center'>{title}</h1>
                        <p className='text-center'>{description}</p>
                    </div>
                </div>
            </div>
        </>
    );
};


export default SectionBanner;