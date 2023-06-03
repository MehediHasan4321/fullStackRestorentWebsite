import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import useCart from '../../../Hooks/useCart/useCart';

const Payments = () => {
    const [orders] = useCart()
    const totalPrice = orders.reduce((sum, item) => {
        return sum + item.price
    }, 0)
    const payable = parseFloat(totalPrice.toFixed(2))
   
    const stripePromise = loadStripe(import.meta.env.VITE_Stripe_Secrect_Publisable_Key)
    return (
        <div>
            <h1 className='text-3xl text-center'>This is Payment page</h1>
            <div className='w-96 mx-auto mt-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm price={payable} orders={orders} />
                </Elements>
            </div>
        </div>
    );
};

export default Payments;