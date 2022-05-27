import React from 'react';
import ProductCard from './ProductCard';

const UpcomingProduct = () => {
    const products=[
        {id:1,name:"zila1",img:"https://i.ibb.co/rwp379h/Kawasaki-Ninja-400.webp"},
        {id:2,name:"zila1",img:"https://i.ibb.co/rwp379h/Kawasaki-Ninja-400.webp"},
        {id:3,name:"zila1",img:"https://i.ibb.co/rwp379h/Kawasaki-Ninja-400.webp"},
    ]
    return (
      
        <div className='my-4 mx-10'>
            <h1 className='text-center text-3xl underline text-slate-700 font-semibold italic my-4'>Upcoming Product</h1>
              <div className='grid grid-cols-1 lg:grid-cols-3 gap-1'>
          {  products.map((product)=>(<ProductCard key={product.id} product={product}></ProductCard>))}
        </div>
        </div>
    );
};

export default UpcomingProduct;