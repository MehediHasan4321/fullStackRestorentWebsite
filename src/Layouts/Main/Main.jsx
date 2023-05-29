import React from 'react';
import NavBar from '../ShareCompo/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../ShareCompo/Footer/Footer';

const Main = () => {
    return (
        <>
        <NavBar/>
        <Outlet/>
        <Footer/>
        </>
    );
};

export default Main;