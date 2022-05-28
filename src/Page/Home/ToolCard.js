import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import useUserDetails from '../../Hooks/useUserDetails';

const ToolCard = ({tool}) => {
  const [user,loading,error]=useAuthState(auth)
    const {name,img,description,quantity,minimumOrder,price,_id}=tool;
    // const {
    //   isLoading1,
    //   error1,
    //   data: users,
    //   refetch1,
    // }=useUserDetails(user?.email)
    // console.log(quantity)
    return (
        <div className="card card-compact w-96 bg-white text-neutral-content shadow-xl">
        <figure className='p-8'><img className='h-40' src={img} alt={name} /></figure>
        <div className="card-body text-black font-bold">
          <h2 className=" text-center text-2xl">{name}</h2>
          <p className='text-left'>{description.slice(0,100)+'...'}</p>
          <p className='text-left'>Quantity:{quantity}</p>
          <p className='text-left'>Minimum Order:{minimumOrder}</p>
          <p className='text-left'>Price:{price}</p>
          <div className="card-actions justify-center">
            <Link   to={`/purchase/${_id}`} className="btn btn-primary ">Buy Now</Link>
          </div>
        </div>
    
      </div>
    );
};

export default ToolCard;