import FoodCard from '../../../Components/FoodCard/FoodCard';

const OrderTab = ({items}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-12'>
            {
                items.map(item => <FoodCard key={item._id} item={item} />)
            }
        </div>
    );
};

export default OrderTab;