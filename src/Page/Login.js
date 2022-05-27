import { async } from '@firebase/util';
import React from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../firebase.init';
import useToken from '../Hooks/useToken';
import Loading from '../Utilities.js/Loading';

const Login = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let from = location?.state?.from?.pathname || "/";
    // password reset 
    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(
        auth
      );
    const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const [token]=useToken(guser)
    const handleSubmit=async (event)=>{
        event.preventDefault();
        const email=event.target.email.value;
        const password= event.target.password.value;
       await signInWithEmailAndPassword(email, password);
       
       
    console.log(email,password)
    
    }
    // password recover 
     
    // const handlePasswordReset= async (event)=>{
    //     event.preventDefault();
    //     const email=event.target.email.value;
    //     await sendPasswordResetEmail(email);
    //     toast.success("Password recover email send")
    // }
    let err;
    if(error){
        const z=error.message.split('/');
        const m=z[1].split(')');
       err=m[0];
    }
    let gerr;
    if(gerror){
        const z=gerror.message.split('/');
        const m=z[1].split(')');
       gerr=m[0];
    }
    // loading
    if(loading||gloading)
    {
        return <Loading></Loading>
    }
    if(user||guser){
        navigate(from, { replace: true });
     
    }
      return (
        <div className=" flex h-screen justify-center items-center">
          <div class="card w-96 bg-base-600 shadow-xl">
            <div class="card-body grid grid-cols-1 justify-items-center">
              <h2 class="text-2xl  font-bold text-primary">Log in</h2>
              <div class="flex flex-col w-full border-opacity-50">
                <div class="grid w-11/12 card  rounded-box place-items-center">
               <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 my-4 justify-items-center w-full px-4">
               <input type="email" name="email" placeholder="Please Enter the email" class="input input-bordered input-info w-full max-w-xs" />
                <input type="password" name="password" placeholder="password" class="input input-bordered input-info w-full max-w-xs" />
                {error&&<div className="text-red-500">{err}</div>}
                {gerror&&<div className="text-red-500">{gerr}</div>}
                <input type="submit" placeholder="Type here" class="btn btn-primary w-8/12 max-w-xs" />
               </form>
               <div>
               <span className='whitespace-nowrap'>Forgot password? <button  className='btn btn-link'>Password Recover</button></span>  <span className=" whitespace-nowrap">New to this site? <Link to='/registration'><span className=" whitespace-nowrap text-primary">Registration</span></Link></span>
               </div>
                </div>
                {/* divider */}
                <div class="divider">OR</div>
                <div class="grid h-20 card rounded-box place-items-center">
                  <button
                    onClick={() => signInWithGoogle()}
                    class="btn btn-outline"
                  >
                    Sign in with Google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
      }
export default Login;