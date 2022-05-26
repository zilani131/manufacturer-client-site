import React from 'react';
import { BeakerIcon, FlagIcon, TrendingUpIcon, UserGroupIcon } from '@heroicons/react/solid'
const BuissenessSummary = () => {
    return (
        <div>
            <h1 className='text-center text-4xl font-bold my-4 text-primary pb-1 underline'>People spend money when and where they feel good</h1>
          
          <div className='grid grid-cols-3 font-bold justify-items-center w-3/4 mx-auto'>
               
            <div className='grid grid-cols-1 text-center'>
            <FlagIcon  className="h-10 w-10 text-blue-500 mx-auto"></FlagIcon>
            <p className='text-3xl text-primary'>40</p>
            <p className='text-3xl '>Countries</p>
            </div>
            <div className='grid grid-cols-1 text-center'>
            <TrendingUpIcon className="h-10 w-10 text-blue-500 mx-auto"></TrendingUpIcon>
            <p className='text-3xl text-primary'>1M+</p>
            <p className='text-3xl '>Sells</p>
            </div>
            <div className='grid grid-cols-1 text-center'>
            <UserGroupIcon className="h-10 w-10 text-blue-500 mx-auto"></UserGroupIcon>
            <p className='text-3xl text-primary'>40 Lakh+</p>
            <p className='text-3xl '>Happy Clients</p>
            </div>
          </div>
        </div>
    );
};

export default BuissenessSummary;