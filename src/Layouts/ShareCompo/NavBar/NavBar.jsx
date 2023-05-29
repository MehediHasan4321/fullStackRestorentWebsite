import React, { useContext, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaShoppingCart } from 'react-icons/fa';
import useCart from '../../../Hooks/useCart/useCart';

const NavBar = () => {
   const {user,logOut} = useContext(AuthContext)
   const [orders] = useCart()
  
   const handleLogOut = ()=>{
    logOut()
   }
    return (
        <div className='h-24 bg-black bg-opacity-50 fixed z-20 w-full text-white'>
            <div className='container mx-auto flex justify-between items-center h-full'>
                <div>
                    <h1 className='text-3xl font-semibold uppercase'>Spic King</h1>
                    <p className='font-semibold tracking-[7px] uppercase'>Restorent</p>
                </div>
                <div className='flex gap-5 items-center font-semibold uppercase'>
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink>Contact Us</NavLink>
                    <NavLink to={'/userDashboard'}>Dashbord</NavLink>
                    <NavLink to={'/ourMenu'}>Our Menu</NavLink>
                    <Link to={'/userDashboard/myOrders'}><span className=' relative'><FaShoppingCart className='text-xl'/><span className='bg-red-500 text-center text-white -right-7 top-2 text-[10px] px-1 absolute rounded-full'>{orders?.length}</span></span></Link>
                    {user ? <button onClick={handleLogOut}>Log Out</button> : <NavLink to={'/login'}>Sign In</NavLink> }
                    {user  && <div className='rounded-full w-8 h-8'>
                        {user.photoURL ? <img title={user?.displayName} className=' cursor-pointer rounded-full' src={user.photoURL}/> : <span title={user.displayName} className='text-center cursor-pointer border-[1px] rounded-full px-3 py-1 text-lg'>{user.displayName && user.displayName.slice(0,1)}</span>}
                        </div>}
                </div>
            </div>
        </div>
    );
};

export default NavBar;