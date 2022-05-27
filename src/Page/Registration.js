
import React from "react";
import {

  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../firebase.init";
import useToken from "../Hooks/useToken";
import Loading from "../Utilities.js/Loading";


const Registration = () => {
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, user, cloading, cerror] =
    useCreateUserWithEmailAndPassword(auth);
// update name
const [updateProfile, uloading, uerror] = useUpdateProfile(auth);
 // useToken
 const [token]=useToken(user||guser)

  const handleSubmit = async (event) => {
    event.preventDefault();
    const name=event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const cPass = event.target.cPass.value;
   
    if (password !== cPass) {

      return alert("password don't matched");
    }

   await createUserWithEmailAndPassword(email, password);
   await updateProfile({displayName:name});
   await sendEmailVerification()
   toast.success("Email verification send")
    console.log(email, password,cPass);
  };
//   error showing
  let err;
  if (cerror) {
    const z = cerror.message.split("/");
    const m = z[1].split(")");
    err = m[0];
  }
  let gerr;
  if (gerror) {
    const z = gerror.message.split("/");
    const m = z[1].split(")");
    gerr = m[0];
  }
  let uerr;
  if (uerror) {
    const z = gerror.message.split("/");
    const m = z[1].split(")");
    gerr = m[0];
  }
// error end
// loading
if(uloading||gloading||cloading)
{
    return <Loading></Loading>
}
// After login to navigate
// if(user){
//    
//   }
if(user||guser){
  return <Navigate to="/"></Navigate>
}
  return (
    <div>
      <div className=" flex h-screen justify-center items-center">
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body grid grid-cols-1 justify-items-center">
            <h2 class="text-2xl  font-bold text-primary">Registration</h2>
            <div class="flex flex-col w-full border-opacity-50">
              <div class="grid w-11/12 card  rounded-box place-items-center">
                <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 gap-6 my-4 justify-items-center w-full px-4"
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Please Enter your name"
                    class="input input-bordered input-info w-full max-w-xs"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Please Enter the email"
                    class="input input-bordered input-info w-full max-w-xs"
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    class="input input-bordered input-info w-full max-w-xs"
                  />
                  <input
                    type="password"
                    name="cPass"
                    placeholder="confirm password"
                    class="input input-bordered input-info w-full max-w-xs"
                  />
                  {cerror && <div className="text-red-500">{err}</div>}
                  {gerror && <div className="text-red-500">{gerr}</div>}
                  {uerror && <div className="text-red-500">{uerr}</div>}
                  <input
                    type="submit"
                    placeholder="Type here"
                    class="btn btn-primary w-8/12 max-w-xs"
                  />
                 
                </form>
                <div>
                  Allready have an account?{" "}
                  <Link to="/login">
                    <span className="text-primary">Log in</span>
                  </Link>
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
    </div>
  );
};

export default Registration;
