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
    const inputQ = event.target.quantity.value;
    orderedQuantity = inputQ;
    totalAmount = orderedQuantity * price;
    if (inputQ < minimumOrder || inputQ > quantity) {
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
          role: "user",
          totalAmount: totalAmount,
          status: "pending"
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
  const handleUser = (event) => {
    event.preventDefault();
    const Address = event.target.address.value;
    const Phone = event.target.phone.value;
    const profile = { address: Address, phone: Phone };
    fetch(`http://localhost:5000/user?email=${user.email}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profile),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        event.target.reset();
      });
  };
  return (
    <div>
      purchase page {_id}
      <h1>{tool?.name}</h1>
      <div class="hero min-h-screen ">
        <div class="hero-content flex-col lg:flex-row">
          <div class="text-center lg:text-left">
            {/* card items information*/}
            <div class="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={img} alt={name} />
              </figure>
              <div class="card-body text-center lg:text-left">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                <p>Minimum Order:{minimumOrder}</p>
                <p>Quantity:{quantity}</p>
                {/* <p>Price :{price}</p> */}
                <form onSubmit={handleItem}>
                  <input
                    name="quantity"
                    class="input input-bordered"
                    type="number"
                    id=""
                    placeholder={minimumOrder}
                  />
                  <br />
                  <input
                    type="submit"
                    value="Add to cart"
                    class="btn btn-primary"
                  />
                </form>
              </div>
            </div>
          </div>
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
            <div class="card-body">
              <form onSubmit={handleUser} className="grid grid-cols-1 ">
                <input
                  class="input input-bordered"
                  type="text"
                  id=""
                  value={user.displayName}
                  disabled
                />
                <br />
                <input
                  class="input input-bordered"
                  type="email"
                  id=""
                  value={user.email}
                  disabled
                />
                <br />
                <input
                  class="input input-bordered"
                  name="phone"
                  type="number"
                  id=""
                  required
                  placeholder="Phone number"
                />
                <br />
                <textarea
                  class="input input-bordered h-full"
                  name="address"
                  type="text"
                  id=""
                  required
                  placeholder="Address"
                />
                <br />

                <input
                as={Link}
                to="/payment"
                  type="submit"
                  value="Proceed to order"
                  class="btn btn-primary"
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
