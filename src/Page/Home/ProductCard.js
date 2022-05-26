import React from 'react';

const ProductCard = ({product}) => {
    const {img,name,id}=product;
    return (
        <div class="card card-side bg-base-100 shadow-xl">
        <figure className='w-7/12'><img  src={img} alt="Movie"/></figure>
        <div class="card-body bg-base-200">
          <h2 class="card-title">{name}</h2>
        
        </div>
      </div>
    );
};

export default ProductCard;