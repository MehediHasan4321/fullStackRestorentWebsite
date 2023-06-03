import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import { useEffect } from 'react';
import useAexiosSerure from '../../../Hooks/useAexiosSerure';
import useAuth from '../../../Hooks/useAuth';
import { Toaster, toast } from 'react-hot-toast';

const CheckoutForm = ({ price, orders }) => {
    const stripe = useStripe()
    const elements = useElements()
    const [cardError, setCardError] = useState('')
    const [axiosSerure] = useAexiosSerure()
    const { user } = useAuth()
    const [clientSecrect, setClientSecrect] = useState('')
    const [processing, setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState('')
    useEffect(() => {
        if (price) {
            axiosSerure.post("/create-payment-intent", { price })
                .then(res => {
                    setClientSecrect(res.data.clientSecret)
                })
        }
    }, [price])

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement)

        if (card === null) {
            return
        }
        setProcessing(true)

        const { error, paymentMethod } = await stripe.createPaymentMethod({ type: "card", card })
        if (error) {
            setCardError(error.message)
            setProcessing(false)
        }
        else {
            // console.log('payments Methods', paymentMethod)
            setCardError('')
        }

        const { paymentIntent, error: paymentErroe } = await stripe.confirmCardPayment(clientSecrect, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'unknown',
                    name: user?.displayName || 'anonymous'
                }
            }

        })
        if (paymentErroe) {
            console.log(paymentErroe)
        }

        //console.log('paymentntIntent',paymentIntent)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id)

            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                quantity: orders.length,
                itemName: orders.map(item => item.name),
                itemId: orders.map(item => item._id)
            }

            axiosSerure.post('/payment', payment)
                .then(res => {
                    console.log(res.data)
                })


            toast.success(`${price} payment success`)
            setProcessing(false)
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-outline btn-primary btn-sm mt-4' type="submit" disabled={!stripe || !clientSecrect || processing}>
                    {processing ? 'Processing ...' : `Pay ${price}`}
                </button>
            </form>
            {cardError && <p className='text-red-500 mt-4 text-sm'>{cardError}</p>}
            {transactionId && <p className='text-green-500 mt-4 text-sm'>Payments successfull with transaction Id {transactionId} </p>}
            <Toaster />
        </>
    );
};

export default CheckoutForm;