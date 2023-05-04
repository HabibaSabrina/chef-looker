import React from 'react';
import Banner from '../Banner/Banner';
import Chefs from '../Chefs/Chefs';
import { useLoaderData } from 'react-router-dom';
import FoodCulture from '../FoodCulture/FoodCulture';
import BangladeshiFood from '../BangladeshiFood/BangladeshiFood';

const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <FoodCulture></FoodCulture>
            <Chefs></Chefs>
            <BangladeshiFood></BangladeshiFood>
        </div>
    );
};

export default Home;