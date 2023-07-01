import React from 'react';
import Navbar from '../Components/Navbar';
import Home from '../Components/Home';
import SocialLink from '../Components/SocialLink';
import About from '../Components/About';


const MainContent = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Home></Home>
            <About></About>

            <SocialLink></SocialLink>
        </div>
    );
};

export default MainContent;