import React from 'react';
import Banner from './Banner';
import BuissenessSummary from './BuissenessSummary';
import HeroProduct from './HeroProduct';

import Tools from './Tools';
import UpcomingProduct from './UpcomingProduct';
import UserReviews from './UserReviews';

const Home = () => {
    return (
        <div>
      
            <Banner></Banner>
            <BuissenessSummary></BuissenessSummary>
            <Tools></Tools>
            <HeroProduct></HeroProduct>
            <UpcomingProduct></UpcomingProduct>

            <UserReviews></UserReviews>
           
        </div>
    );
};

export default Home;