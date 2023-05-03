import React from 'react';
import Banner from '../Banner/Banner';
import Chefs from '../Chefs/Chefs';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <Chefs></Chefs>
        </div>
    );
};

export default Home;