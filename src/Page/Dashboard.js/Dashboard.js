import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
        <input id="dashboardDrawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content ">
         <h2 className='text-3xl text-purple-700'>Welcome to Dashboard</h2>
         <Outlet /> 
         {/* outlet is the nested screen and show the content we want to show  in this frame by nested routes */}
         
        
        </div> 
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label> 
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li><Link to="/dashboard">Profile</Link></li>
            <li><Link to="/dashboard/myorder">My order</Link></li>
         <li><Link to="/dashboard/review">Review</Link></li>
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;