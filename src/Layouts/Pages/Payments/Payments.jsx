import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';

const Payments = () => {
    //TODO : make sure the publish able key

    const stripePromise = loadStripe(import.meta.env.VITE_Stripe_Secrect_Publisable_Key)
    return (
        <div>
            <h1 className='text-3xl text-center'>This is Payment page</h1>
            <div className='w-96 mx-auto mt-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </div>
        </div>
    );
};

export default Payments;