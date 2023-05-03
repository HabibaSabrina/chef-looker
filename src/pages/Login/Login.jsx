import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                navigate(from, {replace: true})
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <h1 className='text-5xl font-bold my-10 mb-5'><span className='flex justify-center'>Chef Lo<span><img className='w-12 mt-2' src="pan1.png" alt="" /></span> ker</span></h1>
            <h1 className='text-center text-4xl font-bold text-orange-700'>Login</h1>
            <form onSubmit={handleLogin}>
                <div className='text-center mt-10'>
                    <p className='font-semibold'>Email</p>
                    <input className='text-center border-b-2 focus:outline-0 focus:text-center border-orange-300 mt-5 w-80' type="email" name="email" />
                    <br />
                    <p className='font-semibold mt-10'>Password</p>
                    <input className='text-center border-b-2 focus:outline-0 focus:text-center border-orange-300 mt-5 w-80' type="password" name="password" />
                    <br />
                    <button className='bg-orange-400 w-64 rounded-full p-3 text-xl text-white font-semibold hover:bg-orange-500 mt-10'>Login</button>
                    <p className='my-5'>Don't Have an Account? Please <Link to="/register"><span className='text-orange-700 font-semibold'>Register</span></Link></p>
                </div>
            </form>
        </div>
    );
};

export default Login;