import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import useCart from '../../../Hooks/useCart/useCart';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MyOrders = () => {
    const [orders,refetch] = useCart()
    const { user } = useContext(AuthContext)
    const payAblePrice = orders.reduce((price,item)=>{
        return price + item.price
    },0)
    const handleDeleteOrder = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/orders/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }
    return (
        <div className='w-full'>
            <div className='w-fll'>
                <SectionTitle subTitle={'My Cart'} title={'WANNA ADD MORE?'} cl />

            </div>
            <div className='flex justify-between items-center my-4 text-2xl mr-5'>
                <h1>Total Order {orders.length}</h1> 
                <h1>Total Price {payAblePrice}</h1>
                <Link to={'/userDashboard/payment'} className='bg-amber-400 px-6 py-1 rounded-md text-sm'><button>Pay</button></Link>
            </div>
            <div className="overflow-x-auto w-full mb-12">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>images</th>
                            <th>Name</th>
                            <th>price</th>
                            <th>order Id</th>
                            <th>User Info</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) => <tr key={order._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={order.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{order.name}</td>
                                <td>${order.price}</td>
                                <td>{order._id}</td>
                                <td>
                                    {user?.displayName}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{user?.email}</span>
                                </td>
                                <th>
                                    <button onClick={() => handleDeleteOrder(order._id)} className="btn btn-ghost btn-xs"><FaTrash /></button>
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;