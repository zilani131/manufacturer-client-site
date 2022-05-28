import React from 'react';
import Banner from './Banner';
import BuissenessSummary from './BuissenessSummary';
import CompanyProfile from './CompanyProfile';
import HeroProduct from './HeroProduct';

import Tools from './Tools';
import UpcomingProduct from './UpcomingProduct';
import UserReviews from './UserReviews';

const Home = () => {
    return (
        <div className='bg-gray-100'>
       
            {/* <Banner></Banner> */}
            <BuissenessSummary></BuissenessSummary>
            <Tools></Tools>
            <HeroProduct></HeroProduct>
            {/* <UpcomingProduct></UpcomingProduct> */}
            <CompanyProfile></CompanyProfile>
            <UserReviews></UserReviews>
           
        </div>
    );
};

export default Home;