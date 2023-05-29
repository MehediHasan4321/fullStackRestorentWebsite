import React from 'react';

const Button = ({text='Button text',color='black'}) => {
    return (
        <div className='text-center my-8'>
            <button className='px-6 py-3 rounded-xl bg-[#f2f2f2] font-semibold border-b-4 text-yellow-500 hover:bg-slate-800' style={{borderColor:`${color}`}}> {text}</button>
        </div>
    );
};

export default Button;