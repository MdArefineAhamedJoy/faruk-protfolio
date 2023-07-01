import React from 'react';
import img1 from "../assets/istockphoto-1413514596-170667a.webp"
import img2 from '../assets/istockphoto-1413514709-170667a.webp'
import img3 from '../assets/istockphoto-1413514774-170667a.webp'

const Experience = () => {
    // Todo: ADD Images 
    const experiences = [
        {
            id:1 , 
            title: 'HTML',
            src: img3,
            style : 'shadow-orange-500'
        },
        {
            id:2 , 
            title: 'CSS3',
            src: img1,
            style : 'shadow-blue-500'
        },
        {
            id:3 , 
            title: 'JavaScript',
            src: img2,
            style : 'shadow-yellow-500'
        },
        {
            id:4 , 
            title: 'React',
            src: img1,
            style : 'shadow-blue-600'
        },
        {
            id:5 , 
            title: 'Tailwind',
            src: img2,
            style : 'shadow-blue-400'
        },
        {
            id:6 , 
            title: 'Express.js',
            src: img3,
            style : 'shadow-green-600'
        },
    ]
    return (
        <div name="experience" className='bg-gradient-to-b from-gray-800  to-black w-full h-screen'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'> 
            <div>
                    <p className="text-4xl font-bold border-b-4 inline p-2  border-gray-500">Experience</p>
                    <p className='py-6'>These are the technologies l've worked with </p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

            {
                experiences.map(({id , title ,src , style})=>
       
                <div key={id} className={`shadow-md hover:scale-105 duration-200 py-2 rounded-lg ${style}` }>
                    <img src={src} alt={title} className='w-20 mx-auto' />
                    <p className='mt-4'>{title}</p>
                </div>)
            }
        
                </div>
            </div>
        </div>
    );
};

export default Experience;