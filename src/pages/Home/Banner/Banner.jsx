import React from 'react';

const Banner = () => {
    return (
        <div className='bg-orange-300 md:mx-24 mt-10 rounded-xl'>
            <div className='md:flex md:mx-20 items-center py-10'>
                <div className='max-sm:p-5 md:ml-28 leading-7'>
                    <h1 className='text-5xl font-bold text-white'>Welcome to <br /> <span className='flex mt-5'>Chef Lo<span><img className='w-12 mt-2' src="pan1.png" alt="" /></span> ker</span></h1>
                    <p className='text-orange-800'>This website is all about bangladeshi chefs and bangladeshi cuisine recipes. You can find different types of bangladeshi cuisine recipes here. Also, you will get to know about some popular bangladeshi chefs. Thank you for visiting us.</p>
                </div>
                <img className='md:transform md:-scale-x-100 ml-auto' src="banner.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;