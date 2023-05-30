import React from 'react';
import { FaTrash, FaUsers } from 'react-icons/fa';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { useQuery } from '@tanstack/react-query';
import { Toaster, toast } from 'react-hot-toast';

const AllUsers = () => {

    const { data: allUser = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json()
    })

    const handleAdminRole = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount>0){
                    toast.success(`${user.name} is now Admin`)
                    refetch()
                }
            })
    }
    return (
        <div className='bg-[f2f2f2]'>
            <div>
                <SectionTitle title={'Manage All User'} subTitle={'How Many??'} />
            </div>
            <h1 className='text-2xl font-semibold my-8'>Total Users {allUser.length}</h1>
            <div className="overflow-x-auto w-full ">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>images</th>
                            <th>User Name</th>
                            <th>User email</th>
                            <th>User role</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allUser.map((user, index) => <tr key={user._id}>
                            <th>
                                {index + 1}
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={user.images} alt="User images" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role === 'admin' ? "admin" : <FaUsers onClick={() => handleAdminRole(user)} className='text-3xl' />}</td>
                            <th>
                                <button className="btn btn-ghost btn-xs"><FaTrash className='text-2xl' /></button>
                            </th>
                        </tr>)}
                    </tbody>
                </table>
            </div>
            <Toaster/>
        </div>
    );
};

export default AllUsers;