import React from 'react';
import Navbar from '../Components/Navbar';
import Home from '../Components/Home';
import SocialLink from '../Components/SocialLink';


const MainContent = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Home></Home>

            <SocialLink></SocialLink>
        </div>
    );
};

export default MainContent;