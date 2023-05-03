import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefInfo from '../ChefInfo/ChefInfo';

const Chefs = () => {
    const chefs = useLoaderData()
    return (
        <div className='mx-32'>
            <div className='flex items-center justify-center mt-20 mb-5'>
            <h1 className='text-4xl font-bold'>Bangladeshi Chef Book</h1>
            <img className='w-24 h-20 -ml-3' src="bdchef.png" alt="" />
            </div>
            <p className='text-center'>In this section, you will get to know some amazing chefs of our country whose are making their remarks allover the world. Surely they are making us proud. You also can visit their recipes from our website.</p>
            <div className='grid grid-cols-3 gap-20 my-20'>
                {
                    chefs.map(chef => <ChefInfo key={chef.id} chef={chef}></ChefInfo>)
                }
            </div>
        </div>
    );
};

export default Chefs;