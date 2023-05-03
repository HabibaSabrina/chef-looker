import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid'

const Header = () => {
    return (
        <div className='flex justify-between items-center mx-24 mt-10'>
            <div className='flex gap-16 items-center'>
                <div className='flex items-center'>
                    <img className='w-36' src="logo.png" alt="" />
                    <h1 className='text-3xl font-bold -m-8'>Chef Cooker</h1>
                </div>
                <div>
                    <Link to='/'><button className='mx-5 bg-orange-300 w-24 py-3 rounded text-xl font-semibold text-white'>Home</button></Link>
                    <Link to='/blog'><button className='bg-orange-300 w-24 py-3 rounded text-xl font-semibold text-white'>Blog</button></Link>
                </div>
            </div>
            <Link><button className='bg-orange-300 w-32 p-3 rounded text-xl font-semibold text-white flex items-center gap-2 mr-8'><ArrowRightOnRectangleIcon className="h-6 w-7 text-white" /> Login</button></Link>
        </div>
    );
};

export default Header;