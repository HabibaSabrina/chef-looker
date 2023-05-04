import React from 'react';
import Header from '../pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import Footer from '../pages/Shared/Footer/Footer';
import ScrollToTop from '../pages/Shared/ScrollToTop/ScrollToTop';

const Main = () => {
    return (
        <div>
            <ScrollToTop></ScrollToTop>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster></Toaster>
        </div>
    );
};

export default Main;