import React from 'react';

const CompanyProfile = () => {
    return (
       <div className='card bg-white shadow-lg'>
           <h1 className='text-center text-3xl font-semibold italic mt-10 text-slate-600 pb-1 underline'>Company Profile</h1>
            <div class="hero min-h-screen ">
        <div class="hero-content flex-col lg:flex-row">
          <img className='w-5/12 rounded-xl' src="https://i.ibb.co/7v0My8T/Hellers-Industry-4-0-approach-to-manufacturing-11zon.jpg" />
          <div className='w-7/12 pl-20'>
          
            <p class="py-6 text-lg font-semibold">Business Type: 	Trading Company </p>
            <p class="py-6 text-lg font-semibold">Business Range:  Home Equipment & Components... </p>
            <p class="py-6 text-lg font-semibold">Main Product : Hand Driller , Hammer </p>
            <p class="py-6 text-lg font-semibold">Type of Ownership : Limited company </p>
            <p class="py-6 text-lg font-semibold">Management System Certification : iSO 9001 </p>
            <p class="py-6 text-lg font-semibold">Export Year: 2015-5-10 </p>
            
          </div>
        </div>
      </div>
       </div>
    );
};

export default CompanyProfile;