import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightOnRectangleIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/24/solid'
import { AuthContext } from '../../../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () =>{
        logOut()
        .then()
        .catch(error =>{
            console.log(error)
        })
    }
    return (
        <div className='flex justify-between items-center mx-24 mt-10'>
            <div className='flex gap-16 items-center'>
                <div className='flex items-center'>
                    <img className='w-36' src="/logo.png" alt="" />
                    <h1 className='text-3xl font-bold -m-8'>Chef Looker</h1>
                </div>
                <div>
                    <Link to='/'><button className='mx-5 bg-orange-400 w-24 py-3 rounded text-xl font-semibold text-white'>Home</button></Link>
                    <Link to='/blog'><button className='bg-orange-400 w-24 py-3 rounded text-xl font-semibold text-white'>Blog</button></Link>
                </div>
            </div>
            <div className='flex gap-5'>
                {
                    user && <img className='w-12 rounded-full' src={user.photoURL} alt="" />

                }
            {
                user ? <button onClick={handleLogOut} className='bg-orange-400 w-36 p-3 rounded text-xl font-semibold text-white flex items-center gap-2 mr-8'><ArrowLeftOnRectangleIcon className="h-6 w-7 text-white" /> Log Out</button> : <Link to="/login"><button className='bg-orange-400 w-36 p-3 rounded text-xl font-semibold text-white flex items-center gap-2 mr-8'><ArrowRightOnRectangleIcon className="h-6 w-7 text-white" /> Login</button></Link>
            }
            </div>
        </div>
    );
};

export default Header;