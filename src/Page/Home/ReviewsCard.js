import React from "react";

const ReviewsCard = ({re,refetch}) => {
    const {userName,rating,review}=re;
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">{userName}</h2>
        <p>{review}</p>
        <p>{rating}</p>
       
      </div>
    </div>
  );
};

export default ReviewsCard;
