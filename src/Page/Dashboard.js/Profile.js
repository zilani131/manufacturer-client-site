import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../../Utilities.js/Loading';

const Profile = () => {
    const [user,loading,erro]=useAuthState(auth)
    if(loading){
        <Loading></Loading>
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        const name=user.displayName;
        const email=user.email;
        const phone=event.target.phone.value;
        const linkedin=event.target.linkedin.value;
        const education=event.target.education.value;
        console.log(name,email,phone,linkedin,education)
        const profile={name,email,phone,linkedin,education}
        fetch('http://localhost:5000/userdetails',{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(profile),
        })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          event.target.reset();
        });
    }
    return (
        <div>
          
            <form onSubmit={handleSubmit} className="grid grid-cols-1 w-6/12 bg-slate-400 p-8 rounded-lg ">
                <label>
                <input
                  class="input input-bordered"
                  type="text"
                  id=""
                  value={user.displayName}
                  disabled
                />
                </label>
                <br />
                <input
                  class="input input-bordered"
                  type="email"
                  id=""
                  value={user.email}
                  disabled
                />
                <br />
                <input
                  class="input input-bordered"
                  name="phone"
                  type="number"
                  id=""
                  required
                  placeholder="Phone number"
                />
                <br />
                <input
                  class="input input-bordered"
                  name="linkedin"
                  type="link"
                  id=""
                  required
                  placeholder="Linked in link"
                />
                <br />
                <textarea
                  class="input input-bordered h-full"
                  name="education"
                  type="text"
                  id=""
                  required
                  placeholder="education"
                />
                <br />

                <input
                
                to="/payment"
                  type="submit"
                  value="add"
                  class="btn btn-primary"
                />
              </form>
        </div>
    );
};

export default Profile;