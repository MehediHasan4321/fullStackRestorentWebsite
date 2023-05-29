import React from 'react';

const SectionTitle = ({title,subTitle,titleColor='black'}) => {
    return (
        <div className='mx-auto w-4/12 my-12 text-center'>
            <p className=' text-yellow-400 pb-4'>--- {subTitle} ---</p>
            <h1 className='text-3xl font-semibold border-y-2 py-4 uppercase' style={{color:`${titleColor}`}}>{title}</h1>
        </div>
    );
};

export default SectionTitle;