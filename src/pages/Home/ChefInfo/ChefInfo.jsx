import React from 'react';
import { Link } from 'react-router-dom';
import { HandThumbUpIcon } from '@heroicons/react/24/solid';
import LazyLoad from 'react-lazy-load';

const ChefInfo = ({ chef }) => {
    const { id, chefPicture, chefName, experience, likes } = chef
    return (
        <div className='w-80 p-5 max-sm:my-5 border-2 rounded-xl border-orange-300 hover:bg-orange-50'>
            <LazyLoad height={150}>
                <img className='rounded-full w-36 mx-auto my-5' src={chefPicture} alt="" />
            </LazyLoad>
            <img className='w-48 mx-auto' src="/wave.png" alt="" />
            <div className='text-center my-5'>
                <h1 className='text-3xl font-bold'>{chefName}</h1>
                <p className='text-xl my-3'><b>Experience:</b> {experience} years</p>
                <p className='mb-3 flex justify-center gap-2'><HandThumbUpIcon className="h-6 w-7" /> {likes}</p>
                <Link to={`/chef/${id}`}><button className='bg-orange-400 p-3 rounded text-white font-semibold my-2 hover:bg-orange-600'>View Recipes</button></Link>
            </div>
        </div>
    );
};

export default ChefInfo;