import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({payment}) => {

    // console.log(payment?.totalAmount)
    // const [clientSecret, setClientSecret] = useState("");
    // useEffect(() => {
    //     // Create PaymentIntent as soon as the page loads
    //     fetch("https://cryptic-dawn-85784.herokuapp.com//create-payment-intent", {
    //       method: "POST",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify(payment?.totalAmount),
    //     })
    //       .then((res) => res.json())
    //       .then((data) => {
    //         console.log(data)
    //          if(data?.clientSecret){
    //         setClientSecret(data.clientSecret);
    //       }
          
    //   })}, [payment?.totalAmount]);
    // const stripe = useStripe();
    // const elements = useElements();
    // const [cardError,setCardError]=useState('')

    // const handleSubmit=async (event)=>{
    //     event.preventDefault();
    //     if (!stripe || !elements) {
         
    //         return;
    //       }
      
    //       const card = elements.getElement(CardElement);
      
    //       if (card == null) {
    //         return;
    //       }
    //       const {error, paymentMethod} = await stripe.createPaymentMethod({
    //         type: 'card',
    //         card,
    //       });
    //       setCardError(error?.message||'')

    // }
    return (
      <>
        {/* <form onSubmit={handleSubmit}> */}
        <form >
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
      <button disabled className='btn btn-sm btn-success
      ' type="submit" >
        Pay
      </button>
    </form>
    {/* {cardError && <p className='text-red-500'> {cardError}</p>} */}
      </>
    );
};

export default CheckoutForm;