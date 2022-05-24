import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import Loading from '../../../Utilities.js/Loading';
import MyOrderRow from './MyOrderRow';

const MyOrder = () => {
    const [user,loading,error1]=useAuthState(auth)
 
    const {
        isLoading,
        error,
        data: users,
        refetch,
      } = useQuery("tool", () =>
        fetch(`http://localhost:5000/user?email=${user?.email}`).then((res) => res.json())
      );
      if(loading||isLoading){
        return<Loading></Loading>
    }
    return (
        <div>
            My order {users.length}
            <div class="overflow-x-auto w-full">
  <table class="table w-full">
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
    
      {users.map((user,index)=><MyOrderRow key={user._id} refetch={refetch} index={index} user={user}></MyOrderRow>)}
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyOrder;