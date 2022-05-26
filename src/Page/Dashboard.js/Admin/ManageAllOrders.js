import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../Utilities.js/Loading';
import ManageOrdersRow from './ManageOrdersRow';

const ManageOrders = () => {
    
  const {
    isLoading,
    error,
    data: orders,
    refetch,
  } = useQuery("orderlist", () =>
    fetch(`http://localhost:5000/orderlist`).then((res) =>
      res.json()
    )
  );
  if ( isLoading) {
    return <Loading></Loading>;
  }
    return (
        <div>
       
         <div class="overflow-x-auto w-full">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Customer Name</th>
              <th>Email</th>
              <th>Product Name</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.length && orders.map((order, index) => (
              <ManageOrdersRow
                key={order._id}
                refetch={refetch}
                index={index}
                order={order}
              ></ManageOrdersRow>
            ))}
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default ManageOrders;