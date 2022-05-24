import React from 'react';
import { Link } from 'react-router-dom';

const ToolCard = ({tool}) => {
    const {name,img,description,quantity,minimumOrder,price,_id}=tool;
    return (
        <div class="card card-compact w-96 bg-secondary text-neutral-content shadow-xl">
        <figure className='p-8'><img src={img} alt={name} /></figure>
        <div class="card-body text-white">
          <h2 class="card-title">{name}</h2>
          <p className='text-left'>{description}</p>
          {/* <p className='text-left'>Quantity:{quantity}</p> */}
          <p className='text-left'>Minimum Order:{minimumOrder}</p>
          <p className='text-left'>Price:{price}</p>
          <div class="card-actions justify-end">
            <Link to={`/purchase/${_id}`} class="btn btn-primary">Buy Now</Link>
          </div>
        </div>
      </div>
    );
};

export default ToolCard;