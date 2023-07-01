import React from 'react';
import Navbar from '../Components/Navbar';
import Home from '../Components/Home';
import SocialLink from '../Components/SocialLink';
import About from '../Components/About';
import Portfolio from '../Components/Portfolio';


const MainContent = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Home></Home>
            <About></About>
            <Portfolio></Portfolio>

            <SocialLink></SocialLink>
        </div>
    );
};

export default MainContent;