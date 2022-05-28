import { AcademicCapIcon, MailIcon, UserIcon } from '@heroicons/react/solid';
import React from 'react';

const MyPortfolio = () => {
    return (
        <div className="card w-6/12 bg-base-100 mx-auto my-10 shadow-xl">
   <div className="avatar mx-auto my-6">
  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="https://i.ibb.co/X8TJvtv/photo-2021-12-19-22-43-45-removebg-preview.webp" />
  </div>
</div>
        <div className="card-body items-start text-start">
        <p className='flex flex-row items-center '>  <UserIcon className='h-8'></UserIcon><h2 className="card-title ml-3">MD.Abdul Kader Zilani</h2></p>
          <p className='flex flex-row items-center '><MailIcon className='h-8'></MailIcon> <p className='text-xl font-medium ml-3'>zilani.cuet@gmail.com</p></p>
          <p className='flex flex-row items-center '><AcademicCapIcon className='h-8'></AcademicCapIcon> <p className='text-xl font-medium ml-3'>Bsc in Mechanical Engineering,CUET</p></p>
         <p className='text-xl font-medium flex flex-row'>Skills :
         {/* skills icon */}
          <img className='h-8 mr-1' src="https://i.ibb.co/41XPBKH/html-removebg-preview.webp" title='Html' alt="Html" />
          <img className='h-8 mr-1' src="https://i.ibb.co/6X677xy/CSS3-logo-svg-removebg-preview.webp" title='CSS' alt="CSS" />
          <img className='h-8 mr-1' src="https://i.ibb.co/6Fj8TL8/Bootstrap-logo-svg-removebg-preview.webp" alt="Bootstrap" />
          <img className='h-8 mr-1' src="https://i.ibb.co/XW206Fg/tailwind.webp" alt="Tailwind" />
          <img className='h-8 mr-1' src="https://i.ibb.co/rbLm9Ms/js-removebg-preview.webp" alt="Js" />
          <img className='h-8 mr-1' src="https://i.ibb.co/brqvLFt/react.webp" alt="React" />
          <img className='h-8 mr-1' src="https://i.ibb.co/yQRqt3v/node-removebg-preview.webp" alt="Node js" />
          <img className='h-8 mr-1' src="https://i.ibb.co/FxDw2hh/express.webp" alt="Express js" />

          <img className='h-8' src="https://i.ibb.co/xXVkBpM/download-removebg-preview.webp" alt="Mongodb" />
           </p>
           {/* My best website */}
           <p className='text-xl font-bold'>Till now my best website link:
               <li className='text-lg font-medium '><a className='underline text-slate-600' href="https://manufacturer-website-23b93.web.app/">CTG Tools Technology Co.</a></li>
               <li className='text-lg font-medium '><a className='underline text-slate-600' href="https://warehouse-update-host.web.app/">Bangla Motors.</a></li>
               <li className='text-lg font-medium '><a className='underline text-slate-600' href="https://curious-basbousa-445312.netlify.app/">Pc Bazar</a></li>
           </p>
           <h1 className='text-xl font-bold'>About me</h1>
           <p className='text-lg font-medium'>Assalamualaikum . I am a tech enthusiast .During covid when my university was off , I was thinking how to utilize my time .Then I try to learn programming language and web technology .And now i am very passionate about web technology and programming . In future i want to build a career in web technology.</p>
        </div>
      </div>
    );
};

export default MyPortfolio;
// https://i.ibb.co/6Fj8TL8/Bootstrap-logo-svg-removebg-preview.webp
// https://i.ibb.co/6X677xy/CSS3-logo-svg-removebg-preview.webp
// https://i.ibb.co/FxDw2hh/express.webp
// https://i.ibb.co/41XPBKH/html-removebg-preview.webp
// https://i.ibb.co/yQRqt3v/node-removebg-preview.webp
// https://i.ibb.co/X8TJvtv/photo-2021-12-19-22-43-45-removebg-preview.webp
// https://i.ibb.co/brqvLFt/react.webp
// https://i.ibb.co/XW206Fg/tailwind.webp