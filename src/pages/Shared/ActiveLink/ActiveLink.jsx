import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to, children}) => {
    // if a user click on the link the text will be blue otherwise it will be white
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive ? "text-blue-700 font-bold" : "text-white font-semibold"
            }
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;