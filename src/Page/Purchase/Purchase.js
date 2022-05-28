import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Alert from "../../Utilities.js/Alert";
import Loading from "../../Utilities.js/Loading";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const Purchase = () => {
  const [user, loading, error1] = useAuthState(auth);
  // const [btnActive,setBtnActive]=useState(false);
  const { _id } = useParams();

  const {
    isLoading,
    error,
    data: tool,
    refetch,
  } = useQuery("tool", () =>
    fetch(`http://localhost:5000/purchase/${_id}`).then((res) => res.json())
  );
  if (isLoading || loading) {
    return <Loading></Loading>;
  }
  let { name, img, description, quantity, minimumOrder, price } = tool;
  let orderedQuantity, totalAmount;
  const handleItem = (event) => {
    event.preventDefault();
    const Address = event.target.address.value;
   const  Phone = event.target.phone.value;
   const minOrder=parseInt(minimumOrder);
   const maxOrder=parseInt(orderedQuantity);
    const inputQ = event.target.quantity.value;
    orderedQuantity = parseInt(inputQ);
    console.log(inputQ,orderedQuantity,price)
    totalAmount = orderedQuantity * price;
    if (orderedQuantity < minOrder || orderedQuantity > maxOrder) {
      event.target.reset();
      return alert("please input a valid number");
    }
    const newQuantity = quantity - inputQ;
    console.log(newQuantity);
    const updatedQuantity = { newQuantity };
    fetch(`http://localhost:5000/purchase/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedQuantity),
    })
      .then((res) => res.json())
      .then((data) => {
        const profile = {
          productName: name,
          name: user.displayName,
          email: user.email,
          orderedNum: orderedQuantity,
          phone:Phone,
          address:Address,
        
          totalAmount: totalAmount,
          status: "unpaid"
        };
        fetch(`http://localhost:5000/user?email=${user.email}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(profile),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Success:", data);
          });
        event.target.reset();
        refetch();
      });
  };

  return (
    <div>
    
    
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            {/* card items information*/}
            <div className="card w-96 bg-base-100 shadow-xl py-4 px-2">
              <figure>
                <img className="w-10/12" src={img} alt={name} />
              </figure>
              <div className="card-body text-center lg:text-left my-4">
                <h2 className="card-title">{name}</h2>
                <p className="text-lg font-semibold">{description}</p>
                <p>Minimum Order:{minimumOrder}</p>
                <p>Quantity:{quantity}</p>
               
              </div>
            </div>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
            <div className="card-body">
              <form onSubmit={handleItem} className="grid grid-cols-1 ">
                <input
                  className="input input-bordered"
                  type="text"
                  id=""
                  value={user.displayName}
                  disabled
                />
                <br />
                <input
                  className="input input-bordered"
                  type="email"
                  id=""
                  value={user.email}
                  disabled
                />
                <br />
                <input
                  className="input input-bordered"
                  name="phone"
                  type="number"
                  id=""
                  required
                  placeholder="Phone number"
                />
                <br />
                <textarea
                  className="input input-bordered h-full"
                  name="address"
                  type="text"
                  id=""
                  required
                  placeholder="Address"
                />
                <br />
                <input
                    name="quantity"
                    className="input input-bordered"
                    type="number"
                    id=""
                    placeholder={minimumOrder}
                  />
                  <br />

                <input
             
           
                  type="submit"
                  value="Proceed to order"
                  className="btn btn-primary"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
