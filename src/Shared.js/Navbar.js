import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../firebase.init";
import Loading from "../Utilities.js/Loading";
import { signOut } from "firebase/auth";
import useUserDetails from "../Hooks/useUserDetails";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  // const {
  //   isLoading1,
  //   error1,
  //   data: users,
  //   refetch1,
  // }=useUserDetails(user?.email)
  if (loading) {
    return <Loading></Loading>;
  }
 const handleSignOut=event=>{
   event.preventDefault()
   signOut(auth)
  //  refetch1()
 }
  const title = (
    <>
      <li>
        <Link to="/home">Home</Link>
      </li>

      {user ? (
        <>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <button onClick={handleSignOut}>Sign out</button>
          </li>
        </>
      ) : (
        <li>
          <Link  to="/login">Login</Link>
        </li>
      )}
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      {user?<li className="my-1">
      <span  className="whitespace-nowrap">{user.displayName}</span>
      </li>:''}
      <li>
        <Link to="/myportfolio">My Portfolio</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-slate-600 text-white">
      <div className="navbar-start">
        <div className="dropdown ">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className=" menu menu-compact dropdown-content mt-3 p-2 shadow  bg-neutral text-neutral-content rounded-box w-52"
          >
            {title}
          </ul>
        </div>
        <div className="flex items-center"><img className="w-16 h-12" src="https://i.ibb.co/JQNgfzm/png-transparent-kodi-television-streaming-media-plug-in-hi-tech-miscellaneous-television-computer-re.webp" alt="" /><a className="btn btn-ghost normal-case text-xl italic ">CTG Tools Technology Co.</a></div>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0 ">{title}</ul>
      </div>
    </div>
  );
};

export default Navbar;
