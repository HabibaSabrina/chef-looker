import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const handleRegister = event => {
        event.preventDefault();
        setSuccess('')
        setError('')
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        
        if (password.length < 6) {
            setError('Please add at least 6 characters in your password')
            return;
        }
        else if(email =='' || password==''){
            setError('Please fill up both email and password field')
        }
        createUser(email, password)
        .then(result =>{
            const createdUser = result.user;
            console.log(createdUser)
            setError('')
            event.target.reset()
            setSuccess('user has created successfully')
            updateUserData(result.user, photo, name)
        })
        .catch(error =>{
            setError(error.message)
            setSuccess('')
        })
        const updateUserData = (user, photo, name) =>{
            updateProfile(user, {
                photoURL: photo,
                displayName: name
              })
              .then(() => {
                console.log("user name updated")
              })
              .catch((error) => {
                setError(error.message)
              });
              
        }
    }

    return (
        <div>
            <h1 className='text-5xl font-bold my-10 mb-5'><span className='flex justify-center'>Chef Lo<span><img className='w-12 mt-2' src="pan1.png" alt="" /></span> ker</span></h1>
            <h1 className='text-center text-4xl font-bold text-orange-700'>Register</h1>
            <form onSubmit={handleRegister}>
                <div className='text-center mt-10'>
                    <p className='font-semibold '>Name</p>
                    <input className='text-center mb-5 border-b-2 focus:outline-0 focus:text-center border-orange-300 mt-5 w-80' type="text" name="name" />
                    <br />
                    <p className='font-semibold mt-5'>Email</p>
                    <input className='text-center border-b-2 focus:outline-0 focus:text-center border-orange-300 mt-5 w-80' type="email" name="email" />
                    <br />
                    <p className='font-semibold mt-10'>Password</p>
                    <input className='border-b-2 text-center focus:outline-0 focus:text-center border-orange-300 mt-5 w-80' type="password" name="password" />
                    <br />
                    <p className='font-semibold mt-10'>Photo URL</p>
                    <input className='text-center border-b-2 focus:outline-0 focus:text-center border-orange-300 mt-5 w-80' type="text" name="photo" />
                    <br />
                    <button className='bg-orange-400 w-64 rounded-full p-3 text-xl text-white font-semibold hover:bg-orange-500 mt-10'>Register</button>
                    <p className='my-5'>Already Have an Account? <Link to="/login"><span className='text-orange-700 font-semibold'>Login</span></Link></p>
                </div>
            </form>
            <p className='text-center text-red-500 font-semibold'>{error}</p>
            <p className='text-center text-green-500 font-semibold'>{success}</p>
        </div>
    );
};

export default Register;