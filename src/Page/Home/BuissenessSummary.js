import React from 'react';
import {  FlagIcon, TrendingUpIcon, UserGroupIcon } from '@heroicons/react/solid'
const BuissenessSummary = () => {
    return (
        <div>
            <h1 className='text-center text-3xl font-semibold italic my-4 text-slate-600 pb-1 underline'>People spend money when and where they feel good</h1>
          
          <div className='grid grid-cols-3 font-bold justify-items-center w-3/4 mx-auto'>
               
            <div className='grid grid-cols-1 text-center'>
            <FlagIcon  className="h-10 w-10 text-blue-500 mx-auto"></FlagIcon>
            <p className='text-2xl text-slate-600'>40</p>
            <p className='text-2xl '>Countries</p>
            </div>
            <div className='grid grid-cols-1 text-center'>
            <TrendingUpIcon className="h-10 w-10 text-blue-500 mx-auto"></TrendingUpIcon>
            <p className='text-2xl text-slate-600'>1M+</p>
            <p className='text-2xl '>Sells</p>
            </div>
            <div className='grid grid-cols-1 text-center'>
            <UserGroupIcon className="h-10 w-10 text-blue-500 mx-auto"></UserGroupIcon>
            <p className='text-2xl text-slate-600'>40 Lakh+</p>
            <p className='text-2xl '>Happy Clients</p>
            </div>
          </div>
        </div>
    );
};

export default BuissenessSummary;