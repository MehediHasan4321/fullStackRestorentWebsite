import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaGoogleWallet, FaHome, FaPhoneAlt } from 'react-icons/fa';

const UserHome = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className='px-5'>
            <h1 className='text-2xl font-semibold my-5'>Hi, Welcome Back {user?.displayName}</h1>
            <div className='flex gap-4'>
                <div className='w-96 h-[150px rounded-md' style={{backgroundImage:'linear-gradient(90deg, #BB34F5 0%, #FCDBFF 100%)'}}>
                    <div className='flex gap-3 items-center justify-center h-full text-white'>
                        <FaGoogleWallet className='text-7xl'/>
                        <div className='font-semibold'>
                            <p className='text-5xl'>250</p>
                            <p className='text-xl text-center'>MENU</p>
                        </div>
                    </div>
                </div>
                <div className='w-96 h-[150px] rounded-md' style={{backgroundImage:'linear-gradient(90deg, #D3A256 0%, #FDE8C0 100%)'}}>
                    <div className='flex gap-3 items-center justify-center h-full text-white'>
                        <FaHome className='text-7xl'/>
                        <div className='font-semibold'>
                            <p className='text-5xl'>250</p>
                            <p className='text-xl text-center'>Shop</p>
                        </div>
                    </div>
                </div>
                <div className='w-96 h-[150px] rounded-md' style={{backgroundImage:'linear-gradient(90deg, #FE4880 0%, #FECDE9 100%)'}}>
                    <div className='flex gap-3 items-center justify-center h-full text-white'>
                        <FaPhoneAlt className='text-7xl'/>
                        <div className='font-semibold'>
                            <p className='text-5xl'>+03</p>
                            <p className='text-xl text-center'>Contacet</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-10 flex'>
                <div className='w-[622px] h-[470px] bg-[#FFEDD5] flex items-center justify-center'>
                        <div>
                            <img className='w-48 h-48 rounded-full' src={user?.photoURL} alt="" />
                            <h1 className='text-3xl font-semibold mt-10 text-center'>{user?.displayName}</h1>
                        </div>
                </div>
                <div className='w-[622px] h-[470px] bg-[#FEF9C3]'>

                </div>
            </div>
        </div>
    );
};

export default UserHome;