import React from 'react';
import { FaAccusoft, FaBars, FaBookMedical, FaCalendarAlt, FaFileContract, FaHome, FaShoppingBag, FaShoppingCart, FaWallet } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';

const UserDashboard = () => {
    return (
        <div className="grid grid-cols-8 container mx-auto">
            <div className=' bg-[#D1A054] h-screen col-span-2 sticky top-0'>
                <div className='mt-8 pl-5'>
                    <h1 className='text-3xl font-semibold uppercase'>Spicy King</h1>
                    <p className='font-semibold tracking-[7px] uppercase'>Restorent</p>
                </div>
                <div className='pl-5 mt-8'>
                    <Link><p className='flex items-center gap-3 mt-6 text-lg cursor-pointer'><FaHome/> User Home</p></Link>
                    <Link><p className='flex items-center gap-3 mt-6 text-lg cursor-pointer'><FaCalendarAlt/> Reservation</p></Link>
                    <Link><p className='flex items-center gap-3 mt-6  text-lg cursor-pointer'><FaWallet/> Pament History</p></Link>
                    <Link to={'/userDashboard/myOrders'}><p className='flex items-center gap-3 mt-6  text-lg cursor-pointer'><FaShoppingCart/> My Orders</p></Link>
                    <Link><p className='flex items-center gap-3 mt-6  text-lg cursor-pointer'><FaAccusoft/> Add Review</p></Link>
                    <Link><p className='flex items-center gap-3 mt-6  text-lg cursor-pointer'><FaBookMedical/> My Booking</p></Link>
                </div>
                <div className=' border-[1px] my-5 mx-2'></div>
                <div className='pl-5 mt-8'>
                    <Link to={'/'}><p className='flex items-center gap-3 mt-6 text-lg cursor-pointer'><FaHome/>Home</p></Link>
                    <Link to={'/ourMenu'}><p className='flex items-center gap-3 mt-6 text-lg cursor-pointer'><FaBars/> Menu</p></Link>
                    <Link><p className='flex items-center gap-3 mt-6  text-lg cursor-pointer'><FaShoppingBag/>Shop</p></Link>
                    <Link><p className='flex items-center gap-3 mt-6  text-lg cursor-pointer'><FaFileContract/>Contact</p></Link>
                    <button className='mt-6  text-lg cursor-pointer bg-amber-300 px-4 py-2 rounded-md'>Sign  Out</button>
                </div>
            </div>
            <div className='pl-10 col-span-6'>
                <Outlet />
            </div>
        </div>
    );
};

export default UserDashboard;