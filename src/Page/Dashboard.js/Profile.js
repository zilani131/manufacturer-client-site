import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useUserDetails from "../../Hooks/useUserDetails";
import Loading from "../../Utilities.js/Loading";

const Profile = () => {
  const [user, loading, erro] = useAuthState(auth);
  if (loading) {
    <Loading></Loading>;
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = user.displayName;
    const email = user.email;
    const phone = event.target.phone.value;
    const linkedin = event.target.linkedin.value;
    const education = event.target.education.value;
    console.log(name, email, phone, linkedin, education);
    const profile = { name, email, phone, linkedin, education };
    fetch("http://localhost:5000/userdetails", {
      method: "POST",
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
    
  };

  console.log(user)
  return (
    <div>
      <div class="card  lg:card-side  shadow-xl">
        <div class="card w-fit bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 className="text-xl font-bold ">Name: {user?.displayName}</h2>
            <p className="text-xl font-bold ">Email:{user.email}</p>
          </div>
         
        </div>
        <div class="card-body">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 w-6/12 bg-slate-800 p-8 rounded-lg mx-auto "
          >
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
           
              type="submit"
              value="add"
              class="btn btn-primary"
            />
           
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
