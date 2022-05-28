import React from "react";

const ReviewsCard = ({re}) => {
    const {userName,rating,review}=re;
  return (
    // https://i.ibb.co/vzqpPJM/user.webp
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="avatar">
  <div className="w-16 ml-8 mt-3 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="https://i.ibb.co/vzqpPJM/user.webp" />
  </div>
</div>
      <div className="card-body">
        <h2 className="card-title">{userName}</h2>
        <p>{review}</p>
        <p>Ratings:{rating}/5</p>
       
      </div>
    </div>
  );
};

export default ReviewsCard;
