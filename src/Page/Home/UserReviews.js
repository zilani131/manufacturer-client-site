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
       <div className='py-4'>
           <h1 className='text-center text-3xl underline text-slate-700 font-semibold italic my-4'>Users Reviews</h1>
           <div className='p-8 grid grid-cols-1 lg:grid-cols-3 justify-items-center '>
            {reviews.length && (reviews?.map(re=><ReviewsCard key={re._id} re={re} ></ReviewsCard>)).reverse().slice(0,3)}
            {/* reviews.length is set to stop the back error */}
        </div>
       </div>
    );
};

export default UserReviews;