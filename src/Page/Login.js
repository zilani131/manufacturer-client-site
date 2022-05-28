import { async } from '@firebase/util';
import React from 'react';
import { useForm } from "react-hook-form";
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
    // const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(
    //     auth
    //   );
    const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const [token]=useToken(guser)
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log('react form',data)
    signInWithEmailAndPassword(data.email, data.password);
  };
    // const handleSubmit=async (event)=>{
    //     event.preventDefault();
    //     const email=event.target.email.value;
    //     const password= event.target.password.value;
    //    await signInWithEmailAndPassword(email, password);
       
       
    // console.log(email,password)
    
    // }
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
          <div className="card w-96 bg-base-600 shadow-xl">
            <div className="card-body grid grid-cols-1 justify-items-center">
              <h2 className="text-2xl  font-bold text-primary">Log in</h2>
              <div className="flex flex-col w-full border-opacity-50">
                <div className="grid w-11/12 card  rounded-box place-items-center">
               {/* <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 my-4 justify-items-center w-full px-4">
               <input type="email" name="email" placeholder="Please Enter the email" className="input input-bordered input-info w-full max-w-xs" />
                <input type="password" name="password" placeholder="password" className="input input-bordered input-info w-full max-w-xs" />
                {error&&<div className="text-red-500">{err}</div>}
                {gerror&&<div className="text-red-500">{gerr}</div>}
                <input type="submit" placeholder="Type here" className="btn btn-primary w-8/12 max-w-xs" />
               </form> */}
               <form className="grid grid-cols-1 gap-6 my-4 justify-items-center w-full px-4" onSubmit={handleSubmit(onSubmit)}>
    
      
      {/* include validation with required or other standard HTML validation rules */}
      <input className="input input-bordered input-info w-full max-w-xs" type="email" {...register("email", { required: true })} />
      <input className="input input-bordered input-info w-full max-w-xs" type="password" {...register("password", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      {error&&<div className="text-red-500">{err}</div>}
                {gerror&&<div className="text-red-500">{gerr}</div>}
      
      <input  className="btn btn-primary w-8/12 max-w-xs" type="submit" />
    </form>

               <div>
               {/* <span className='whitespace-nowrap'>Forgot password? <button  className='btn btn-link'>Password Recover</button></span>  */}
                <span className=" whitespace-nowrap">New to this site? <Link to='/registration'><span className=" whitespace-nowrap text-primary">Registration</span></Link></span>
               </div>
                </div>
                {/* divider */}
                <div className="divider">OR</div>
                <div className="grid h-20 card rounded-box place-items-center">
                  <button
                    onClick={() => signInWithGoogle()}
                    className="btn btn-outline"
                  >
                   <img className='h-8 m-1' src="https://i.ibb.co/h9c4Fyb/google.webp" alt="" /> Sign in with Google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
      }
export default Login;