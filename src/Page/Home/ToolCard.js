import React from 'react';
import { Link } from 'react-router-dom';

const ToolCard = ({tool}) => {
    const {name,img,description,quantity,minimumOrder,price,_id}=tool;
    return (
        <div class="card card-compact w-96 bg-gray-200 text-neutral-content shadow-xl">
        <figure className='p-8'><img src={img} alt={name} /></figure>
        <div class="card-body text-black font-bold">
          <h2 class=" text-center text-2xl">{name}</h2>
          <p className='text-left'>{description}</p>
          <p className='text-left'>Quantity:{quantity}</p>
          <p className='text-left'>Minimum Order:{minimumOrder}</p>
          <p className='text-left'>Price:{price}</p>
          <div class="card-actions justify-center">
            <Link to={`/purchase/${_id}`} class="btn btn-primary ">Buy Now</Link>
          </div>
        </div>
      </div>
    );
};

export default ToolCard;