import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from "react"
import { Elements, ElementsConsumer, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51OSqHnJe3TVOfH08hfR7tEhPE78LgRgxxrYAThbF2GoO9hJRXlB7JD2RjR5oibtaUPnhaHLkvEkYg0Yzoc1lBN7D00Wt3WDhNc');
// const stripePromise = loadStripe('pk_live_51Pael3RxsGzcC5UsLanZ87P5TuB8FLcHk66zEAUCrNUMJhWY6bsfgetuRpewpWPB8mdfmoZpbWUui7JNvvdmw65t00nmHASAM2');

export default function StripeScreen() {

    const [secret, setSecret] = useState("");
    // const [secret, setSecret] = useState("pi_3PGKkPJe3TVOfH080crENJie_secret_Qp5sTkiuZXnNCYjwQha9GOEVU");
    const options = {
        clientSecret: secret,
    };

    // const CheckoutForm = () => {
    //     const onSubmit = () => {
    //         console.log("submitting");
    //         navigate("/payment")
    //     }

    //     const stripe = useStripe();
    //     const elements = useElements();

    //     const [message, setMessage] = useState(null);
    //     const [isLoading, setIsLoading] = useState(false);

    //     const handleSubmit = async (event) => {

    //         event.preventDefault();

    //         if (!stripe || !elements) {
    //           return;
    //         }

    //         const result = await stripe.confirmPayment({
    //           elements,
    //           confirmParams: {
    //             return_url: "https://example.com/order/123/complete",
    //           },
    //         });

    //         if (result.error) {
    //           // Show error to your customer (for example, payment details incomplete)
    //           console.log(result.error.message);
    //         } else {
    //           // Your customer will be redirected to your `return_url`. For some payment
    //           // methods like iDEAL, your customer will be redirected to an intermediate
    //           // site first to authorize the payment, then redirected to the `return_url`.
    //         }
    //       };
    //     return (
    //         <>
    //             <div className='!text-white'>
    //                 <PaymentElement className='!text-white ' />
    //                 <div className='p-10'>
    //                     <p onClick={onSubmit} className=' bg-blue-500 rounded-md w-full py-4 px-1 text-white border-2 border-white cursor-pointer text-center'>Submit</p>
    //                 </div>
    //             </div>
    //         </>
    //     );
    // };

    const getStripeClientScecret = async (price) => {
        const response = await axios.post("https://backend.wodproleague.es/api/v1/payments/intent", { amount: price }, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        setSecret(response.data.
            paymentIntent)
        console.log("created Payment intent : ", response.data.paymentIntent);
    }


    useEffect(() => {
        console.log("hello data");
        let data = localStorage.getItem("wodProUserTempData");
        console.log(JSON.parse(data))
        if (data) {
            console.log("here")
            data = JSON.parse(data)
            console.log("json data is : ", data);
            getStripeClientScecret(data?.userObj?.price);
        }
    }, [])


    return (
        <>
            <div className='p-10 h-screen flex flex-1 justify-center bg-black'>
                <div className='w-1/2 !text-white  p-10 border-2 border-white rounded-md '>
                {!secret &&  <p className='text-white'>Loading...</p> }
                    {secret &&
                        <Elements stripe={stripePromise} options={options}>
                            {/* {secret && */}
                            <CheckoutForm clientSecret={secret} />
                            {/* } */}
                        </Elements>
                    }
                </div>
            </div>
        </>
    );
};
