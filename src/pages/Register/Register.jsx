import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
        .then(result =>{
            const createdUser = result.user;
            console.log(createUser)
        })
        .catch(error =>{
            console.log(error)
        })
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
                    <input className='text-center border-b-2 focus:outline-0 focus:text-center border-orange-300 mt-5 w-80' type="email" name="email" required />
                    <br />
                    <p className='font-semibold mt-10'>Password</p>
                    <input className='border-b-2 text-center focus:outline-0 focus:text-center border-orange-300 mt-5 w-80' type="password" name="password" required />
                    <br />
                    <p className='font-semibold mt-10'>Photo URL</p>
                    <input className='text-center border-b-2 focus:outline-0 focus:text-center border-orange-300 mt-5 w-80' type="text" name="photo" />
                    <br />
                    <button className='bg-orange-400 w-64 rounded-full p-3 text-xl text-white font-semibold hover:bg-orange-500 mt-10'>Register</button>
                    <p className='my-5'>Already Have an Account? <Link to="/login"><span className='text-orange-700 font-semibold'>Login</span></Link></p>
                </div>
            </form>
        </div>
    );
};

export default Register;