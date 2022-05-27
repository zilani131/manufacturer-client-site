import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useUserDetails from '../../Hooks/useUserDetails';


import Loading from '../../Utilities.js/Loading';

const Dashboard = () => {
  const [user,error1,loading]=useAuthState(auth)

  const {
    isLoading1,
    error,
    data: users,
    refetch1,
  }=useUserDetails(user?.email)
  if(loading||isLoading1){
    return <Loading></Loading>
  }
  const role=users?.role;
  console.log(role)
  const userRoutes=<>
   <li><Link to="/dashboard/myorder">My order</Link></li>
         <li><Link to="/dashboard/review">Review</Link></li>
  </>
  const adminRoutes=<>
    <li><Link to="/dashboard/addproduct">Add Product</Link></li>
         <li><Link to="/dashboard/makeadmin">Make Admin</Link></li>
         <li><Link to="/dashboard/manageallorders">Manage All Orders</Link></li>
         <li><Link to="/dashboard/manageproducts">Manage Products</Link></li>
  </>
    return (
        <div class="drawer drawer-mobile bg-gray-50">
        <input id="dashboardDrawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content ">
         <h2 className='text-3xl text-slate-600 text-center underline my-4'>Dashboard</h2>
         <label for="dashboardDrawer" tabindex="0" class=" drawer-button btn btn-primary lg:hidden"><svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            /></label>
         <Outlet /> 
         {/* outlet is the nested screen and show the content we want to show  in this frame by nested routes */}
         {/* <label for="dashboardDrawer" class="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
        
        </div> 
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label> 
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li><Link to="/dashboard">Profile</Link></li>
           {role!=="Admin"?userRoutes:""}
           {role==="Admin"?adminRoutes:""}
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;