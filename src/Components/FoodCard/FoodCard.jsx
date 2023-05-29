import React from 'react';
import Button from '../Button/Button';
import defaultImages from '../../assets/home/slide1.jpg'
import { useContext } from 'react';
import { AuthContext } from '../../Layouts/AuthProvider/AuthProvider';
import { Toaster, toast } from 'react-hot-toast';
import useCart from '../../Hooks/useCart/useCart';
const FoodCard = ({ item }) => {
    const { user } = useContext(AuthContext)
    const [_,refetch] = useCart()
    const handleAddToCart = food => {
        const orderFood = { userEmail: user.email, name:food.name,price:food.price,foodId: food._id,image:food.image }
        if (user) {
            fetch('http://localhost:5000/orders', {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(orderFood)
            })
                .then(res => res.json())
                .then(data => {
                    if(data.insertedId){
                        refetch()
                        toast.success(`${food.name} added to cart`)
                    }
                })
        }
    }
    return (
        <div className='w-[424px] h-[520px] bg-[#f1f1f1] relative'>
            <img className='w-full h-[300px] object-cover' src={item.image ? item.image : defaultImages} alt="Food Images" />
            <div className='p-5 space-y-5'>
                <h1 className='text-2xl font-semibold'>{item.name}</h1>
                <p>{item?.recipe}</p>
                <span onClick={() => handleAddToCart(item)}><Button text='Order Now' /></span>
            </div>
            <span className=' font-semibold bg-black text-white px-4 py-1 absolute top-2 right-2'>${item.price}</span>
            <Toaster/>
        </div>
    );
};

export default FoodCard;