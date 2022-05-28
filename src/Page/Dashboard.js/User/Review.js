import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../../Utilities.js/Loading";

const Review = () => {
    const [user,loading,error]=useAuthState(auth);
    if(loading){
        return <Loading></Loading>
    }
    const handleAdd=event=>{
        event.preventDefault();
        const rating=parseInt(event.target.star.value);
        const review=event.target.description.value;
        const userName=user.displayName;
        const reviews={review,rating,userName}
        fetch('http://localhost:5000/reviews',{
            method:'POST',
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(reviews),
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            event.target.reset();
        })
    }
  return (
    <div>
      <form onSubmit={handleAdd} className="grid grid-cols-1 w-2/4 bg-white p-5 rounded-md mx-auto">
        <textarea
          name="description"
          className="textarea textarea-bordered"
          type="text"
          id=""
          placeholder="comment"
        />
        <br />
        <select name="star" className="select select-bordered w-full  " placeholder="rating">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <br />
        <input   type="submit" value="Add to cart" className="btn btn-primary" />
      </form>
     
    </div>
  );
};

export default Review;
