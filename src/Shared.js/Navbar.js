import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from '../Utilities.js/Loading';
import {  signOut } from 'firebase/auth';

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  if(loading){
    return <Loading></Loading>
  }
    const title=<>
     <li><Link to='/home'>Home</Link></li>
     <li><Link to='/dashboard'>Dashboard</Link></li>
   
     <li><Link to='/blog'>Blog</Link></li>
{user?<li><button onClick={()=>signOut(auth)} >Sign out</button></li>: <li><Link to='/login'>Login</Link></li>}
    </>
    return (
        <div class="navbar bg-neutral text-neutral-content">
        <div className='navbar-start'>
          <div class="dropdown ">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" class=" menu menu-compact dropdown-content mt-3 p-2 shadow  bg-neutral text-neutral-content rounded-box w-52">
                {title}    
            </ul>
          </div>
          <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div class="navbar-end hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
        {title}
          </ul>
        </div>
   
      </div>
    );
};

export default Navbar;