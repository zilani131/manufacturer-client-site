import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useUserDetails from '../../Hooks/useUserDetails';
import Loading from '../../Utilities.js/Loading';

const Dashboard = () => {
  const [user,error1,loading]=useAuthState(auth)
  const {
    isLoading,
    error,
    data: users,
    refetch,
  }=useUserDetails(user.email)
  if(loading||isLoading){
    return <Loading></Loading>
  }
  const role=users[0]?.role;
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
        <div class="drawer drawer-mobile">
        <input id="dashboardDrawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content ">
         <h2 className='text-3xl text-slate-600 text-center underline my-4'>Dashboard</h2>
         <Outlet /> 
         {/* outlet is the nested screen and show the content we want to show  in this frame by nested routes */}
         <label for="dashboardDrawer" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label> 
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li><Link to="/dashboard">Profile</Link></li>
           {role==="user"?userRoutes:""}
           {role==="admin"?adminRoutes:""}
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;