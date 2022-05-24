import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Utilities.js/Loading';
import ReviewsCard from './ReviewsCard';

const UserReviews = () => {
    const {
        isLoading,
        error,
        data: reviews,
       
      } = useQuery("tool", () =>
        fetch(`http://localhost:5000/reviews`).then((res) => res.json())
      );
    if(isLoading)
    {
        return <Loading></Loading>
    }
    console.log(reviews)
    return (
        <div className='p-8'>
            {reviews.length && reviews?.map(re=><ReviewsCard key={re._id} re={re} ></ReviewsCard>)}
            {/* reviews.length is set to stop the back error */}
        </div>
    );
};

export default UserReviews;