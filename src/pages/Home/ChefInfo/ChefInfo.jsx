import React from 'react';
import { Link } from 'react-router-dom';

const ChefInfo = ({ chef }) => {
    const { id, chefPicture, chefName, experience, likes} = chef
    return (
        <div className='w-80 p-5 border-2 rounded-xl border-orange-300 hover:bg-orange-50'>
            <img className='rounded' src={chefPicture} alt="" />
            <div className='text-center my-5'>
                <h1 className='text-2xl font-bold'>{chefName}</h1>
                <p className='text-xl my-3'>Years of experience: {experience}</p>
                <p className='mb-3'>Likes: {likes}</p>
                <Link to={`/chef/${id}`}><button className='bg-gradient-to-r from-orange-600 to-orange-300 p-3 rounded text-white font-semibold'>View Recipes Button</button></Link>
            </div>
        </div>
    );
};

export default ChefInfo;