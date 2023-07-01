import React from 'react';

const Contact = () => {
    return (
        <div name="contact" className='w-full h-screen bg-gradient-to-b from-black to-gray-700 p-4 text-white'>
            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-800'>Contact</p>
                    <p className='py-6'>Submit the form below to get in touch with me </p>
                </div>
                <div className='flex justify-center items-center'>
                    <form action="" className='flex flex-col w-full md:w-1/2 gap-4'>
                        <input type="text" name="name" id="" placeholder='Enter Your Name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                        <input type="email" name="email" id="" placeholder='Enter Your Email' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                        <textarea placeholder='Enter Your Message' className='p-2 border-2 bg-transparent rounded-md text-white focus:outline-none' name="message" id="" rows="8"></textarea>
                        <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-700 px-6 py-3  my-8 mx-auto flex items-center   rounded-md hover:scale-105 duration-300'>Let's Talk</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;