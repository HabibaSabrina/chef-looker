import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';

const PrivateRoute = ({children}) => {
    const {user, loader} = useContext(AuthContext)
    const location = useLocation()
    if(loader){
        return <FaSpinner className='animate-spin text-orange-600 w-8 h-8 mx-auto mt-20'></FaSpinner>

    }
    if(user){
        return children;
    }
    return <Navigate state={{from: location}} to='/login'></Navigate>;
    
};

export default PrivateRoute;