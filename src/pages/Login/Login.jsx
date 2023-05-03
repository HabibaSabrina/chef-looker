import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <h1 className='text-5xl font-bold my-10 mb-5'><span className='flex justify-center'>Chef Lo<span><img className='w-12 mt-2' src="pan1.png" alt="" /></span> ker</span></h1>
            <h1 className='text-center text-4xl font-bold text-orange-700'>Login</h1>
            <div className='text-center mt-10'>
                <p className='font-semibold'>Email</p>
                <input className='border-b-2 focus:outline-0 focus:text-center border-orange-300 mt-5 w-80' type="email" name="" id="" />
                <br />
                <p className='font-semibold mt-10'>Password</p>
                <input className='border-b-2 focus:outline-0 focus:text-center border-orange-300 mt-5 w-80' type="password" name="" id="" />
                <br />
                <button className='bg-orange-400 w-64 rounded-full p-3 text-xl text-white font-semibold hover:bg-orange-500 mt-10'>Login</button>
                <p className='my-5'>Don't Have an Account? Please <Link to="/register"><span className='text-orange-700 font-semibold'>Register</span></Link></p>
            </div>
        </div>
    );
};

export default Login;