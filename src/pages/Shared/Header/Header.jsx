import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightOnRectangleIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/24/solid'
import { AuthContext } from '../../../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    const { user, logOut } = useContext(AuthContext) //getting logged user data
    const [showName, setShowName] = useState(false)
    const handleLogOut = () =>{
        logOut()
        .then()
        .catch(error =>{
            console.log(error)
        })
    }
    const handle = () =>{
        setShowName(true)
    }
    const removeName = () =>{
        setShowName(false)
    }
    return (
        <div className='md:flex justify-between items-center md:mx-24 md:mt-10'>
            <div className='md:flex gap-16 items-center'>
                <div className='flex items-center'>
                    <img className='w-36' src="/logo.png" alt="" />
                    <h1 className='text-3xl font-bold -m-8'>Chef Looker</h1>
                </div>
                <div>
                    <ActiveLink to='/'><button className='mx-5 bg-orange-400 w-24 py-3 rounded text-xl '>Home</button></ActiveLink>
                    <ActiveLink to='/blog'><button className='bg-orange-400 w-24 py-3 rounded text-xl  '>Blog</button></ActiveLink>
                </div>
            </div>
            <div className='md:flex gap-5'>
                {
                    user && <div className='md:flex items-center gap-5'>
                        { showName && <p className='text-xl font-semibold text-orange-500 max-sm:ml-5 max-sm:mt-3'>{user.displayName}</p>}
                        <img onMouseOver={handle} onMouseLeave={removeName} className=' max-sm:ml-5 max-sm:my-5 w-12 rounded-full' src={user.photoURL} alt="" />
                    </div>

                }
            {
                user ? <button onClick={handleLogOut} className='bg-orange-400 w-36 p-3 rounded text-xl font-semibold text-white flex items-center gap-2 md:mr-8 max-sm:ml-5 max-sm:my-5'><ArrowLeftOnRectangleIcon className="h-6 w-7 text-white" /> Log Out</button> : <ActiveLink to="/login"><button className='bg-orange-400 w-36 p-3 rounded text-xl font-semibold flex items-center gap-2 md:mr-8 max-sm:ml-5 max-sm:my-5'><ArrowRightOnRectangleIcon className="h-6 w-7 text-white" /> Login</button></ActiveLink>
            }
            </div>
        </div>
    );
};

export default Header;