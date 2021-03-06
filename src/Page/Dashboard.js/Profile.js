import { AcademicCapIcon, LinkIcon, MailIcon, PhoneIcon, UserIcon } from "@heroicons/react/solid";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
// import useUserData from "../../Hooks/useUserData";
import useUserDetails from "../../Hooks/useUserDetails";
// import useUserDetails from "../../Hooks/useUserDetails";
import Loading from "../../Utilities.js/Loading";

const Profile = () => {
  const unknown="https://i.ibb.co/vzqpPJM/user.webp"
  const [user, loading, erro] = useAuthState(auth);
  const {
    isLoading1, error1,data: users,refetch
  } =useUserDetails(user?.email)
  if (loading||isLoading1) {
    <Loading></Loading>;
  }

  //  fetch(`https://cryptic-dawn-85784.herokuapp.com/userdetails/${user?.email}`)
  //  .then(res=>res.json())
  //  .then(data=>console.log(data))
  //   console.log(user.email)
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = user.displayName;
    const email = user.email;
    const phone = event.target.phone.value;
    const linkedin = event.target.linkedin.value;
    const education = event.target.education.value;
    console.log(name, email, phone, linkedin, education);
    const profile = { name, email, phone, linkedin, education };

    fetch(`https://cryptic-dawn-85784.herokuapp.com/updatedetails/${user.email}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profile),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
       
        event.target.reset();
        refetch()
      });
  };
 
  //  refetch();
  // console.log(user);
  return (
    <div>
      <div className="flex flex-col items-center  lg:flex-row mx-5">
        <div className="w-5/12 card-body shadow-lg bg-white rounded-lg">
          <div className="avatar mx-auto my-3">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              {user?.photoURL===undefined? <img src={unknown} /> :<img src={user?.photoURL} />}
            </div>
          </div>
          <div className="flex items-center my-1"><UserIcon className="h-6 mr-1"></UserIcon> <h2 className=" text-lg font-semibold ">  {user?.displayName}</h2></div>
          <div className="flex items-center my-1"><MailIcon className="h-6 mr-1"></MailIcon> <p className="text-lg font-semibold ">  {user?.email}</p></div>
          <div className="flex items-center my-1"><PhoneIcon className="h-6 mr-1"></PhoneIcon> <p className="text-lg font-semibold ">{users?.phone}</p></div>
          <div className="flex items-center my-1"><LinkIcon className="h-6 mr-1"></LinkIcon><p className="text-lg font-semibold "><a href="https://www.linkedin.com/signup">{users?.linkedin}</a></p></div>
          <div className="flex items-center my-1"><AcademicCapIcon className="h-6 mr-1"></AcademicCapIcon><p className="text-lg font-semibold ">{users?.education}</p></div>
        </div>

        <div className="card-body w-8/12">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-11/12 card-body bg-white shadow-lg  p-8 rounded-lg mx-auto "
          >
            <h1 className="text-xl font-bold my-2">Update Your profile</h1>
            <input
              className="input input-bordered"
              name="name"
              type="text"
              id=""
              disabled
              value={user?.displayName}
            />
            <br />
            <input
              className="input input-bordered"
              name="email"
              type="text"
              id=""
              disabled
              value={user?.email}
            />
            <br />
            <input
              className="input input-bordered"
              name="phone"
              type="number"
              id=""
              required
              placeholder="Phone number"
            />
            <br />
            <input
              className="input input-bordered"
              name="linkedin"
              type="link"
              id=""
              required
              placeholder="Linked in link"
            />
            <br />
            <textarea
              className="input input-bordered h-full"
              name="education"
              type="text"
              id=""
              required
              placeholder="education"
            />
            <br />

            <input type="submit" value="add" className="btn btn-primary" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
