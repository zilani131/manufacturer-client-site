import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import auth from "../../../firebase.init";

import useUserOrders from "../../../Hooks/useUserOrders";
import Loading from "../../../Utilities.js/Loading";
import CancelModal from "./CancelModal";

import MyOrderRow from "./MyOrderRow";

const MyOrder = () => {
 const [cancel,setCancel]=useState(null)
  const [user, loading, error1] = useAuthState(auth);
  const {
    isLoading,
    error,
    data: users,
    refetch,
  }=useUserOrders(user?.email)
  // const {
  //   isLoading,
  //   error,
  //   data: users,
  //   refetch,
  // } = useQuery("tool", () =>
  //   fetch(`https://cryptic-dawn-85784.herokuapp.com/user?email=${user?.email}`).then((res) =>
  //     res.json()
  //   )
  // );
  if (loading || isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      My order {users.length}
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Status</th>
              <th>Action</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {users.length && users.map((user, index) => (
              <MyOrderRow
            
                key={user._id}
                refetch={refetch}
                index={index}
                user={user}
                setCancel={setCancel}
              ></MyOrderRow>
            ))}
          </tbody>
        </table>
      </div>
      {cancel && <CancelModal setCancel={setCancel} key={user._id}
               cancel={cancel} refetch={refetch}></CancelModal>}
    </div>
  );
};

export default MyOrder;
