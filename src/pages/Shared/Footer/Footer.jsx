import React from 'react';
import { FaArrowRight, FaTwitter, FaFacebook, FaInstagram, FaGoogle } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <div className='bg-black text-white flex gap-36 justify-center items-center py-10'>
                <div className='grid grid-cols-2 gap-5'>
                    <img className='w-28' src="/footer/f1.jpg" alt="" />
                    <img className='w-28' src="/footer/f2.jpg" alt="" />
                    <img className='w-28' src="/footer/f3.jpg" alt="" />
                    <img className='w-28' src="/footer/f4.jpg" alt="" />
                </div>
                <div>
                    <h1 className='text-2xl font-semibold my-5'>Contacts</h1>
                    <p><b>Email:</b> chefLooker@gmail.com</p>
                    <p className='my-3'><b>Phone:</b> 01923333333</p>
                    <p className='mb-3'><b>Fax:</b> +1 (0) 000 0000 002</p>
                    <h1 className='my-5 text-2xl font-semibold'>Follow</h1>
                    <div className='flex gap-3'>
                        <FaTwitter className='w-6 h-6'></FaTwitter>
                        <FaFacebook className='w-6 h-6'></FaFacebook>
                        <FaInstagram className='w-6 h-6'></FaInstagram>
                        <FaGoogle className='w-6 h-6'></FaGoogle>
                    </div>
                </div>
                <div>
                    <h1 className='text-2xl font-semibold my-5'>About Us</h1>
                    <p className='leading-7 w-80'>This website is all about bangladeshi chefs and bangladeshi cuisine recipes. You can find different types of bangladeshi cuisine recipes here. Thank you for visiting us.</p>
                    <input className='my-5 rounded border-2 bordeer-white bg-black text-white focus:text-white p-3 w-72 h-10' type="email" name="" placeholder='Your Email' id="" />
                    <button className='bg-orange-600 p-3 border-2 border-orange-600 rounded ml-5'><FaArrowRight></FaArrowRight></button>
                </div>
            </div>
            <div className='bg-black text-white border-t-2'>
            <div className='flex items-center justify-between mx-36'>
                <p className='font-semibold'>Copyright © 2014-2023. All rights reserved</p>
                <div className='flex items-center'>
                    <img className='w-24' src="/logo.png" alt="" />
                    <h1 className='text-2xl font-bold -m-4'>Chef Looker</h1>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Footer;