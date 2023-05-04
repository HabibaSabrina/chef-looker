import React, { useContext } from 'react';
import Banner from '../Banner/Banner';
import Chefs from '../Chefs/Chefs';
import { useLoaderData } from 'react-router-dom';
import FoodCulture from '../FoodCulture/FoodCulture';
import BangladeshiFood from '../BangladeshiFood/BangladeshiFood';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaSpinner } from 'react-icons/fa';

const Home = () => {
    const {loader} = useContext(AuthContext)
    if(loader){
        return <FaSpinner className='animate-spin text-orange-600 w-8 h-8 mx-auto mt-20'></FaSpinner>

    }
    
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