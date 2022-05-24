import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Utilities.js/Loading';
import ReviewsCard from './ReviewsCard';

const UserReviews = () => {
    const {
        isLoading,
        error,
        data: reviews,
        refetch,
      } = useQuery("tool", () =>
        fetch(`http://localhost:5000/reviews`).then((res) => res.json())
      );
    if(isLoading)
    {
        return <Loading></Loading>
    }
    return (
        <div className='p-8'>
            {reviews.map(re=><ReviewsCard key={re._id} re={re} refetch={refetch}></ReviewsCard>)}
        </div>
    );
};

export default UserReviews;