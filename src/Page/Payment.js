import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Utilities.js/Loading";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(
  "pk_test_51L3OyhAvteCnNItpVEaFa6N5NXLnFyX4tYvmp85XeD5IkQKdp31ThESIJEBkOp2apVPExgr8mfMXpatGMtnNJ1IL00jpN3rcyH"
);
const Payment = () => {
  // Got an error
 
  const { id } = useParams();
  const {
    isLoading,
    error,
    data: payment,
    refetch,
  } = useQuery(["payments",id], () =>
    fetch(`https://cryptic-dawn-85784.herokuapp.com/payment/${id}`).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  const { name, productName, totalAmount } = payment;
  return (
    <div className="grid grid-cols-1 gap-2 w-1/2 mx-auto">
      <div className="card w-full bg-base-200 shadow-xl p-4">
        <div className="card-body">
          <h2 className="card-title">Assalamualaikum {name}</h2>
          <p className="text-2xl font-bold">Please Pay for {productName} </p>
          <p className="text-xl font-bold">Please Pay {totalAmount} </p>
        </div>
      </div>
      <div className="card w-full bg-base-200 shadow-xl p-4">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm payment={payment} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
