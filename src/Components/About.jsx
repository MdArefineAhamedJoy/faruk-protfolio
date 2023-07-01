import React from 'react';

const About = () => {
    return (
        <div name="about" className='w-full h-screen  text-white  bg-gradient-to-b from-black  to-gray-800'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-600'>About</p>
                </div>
                <p className='text-xl mt-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda facere dolorum pariatur, nemo quam perspiciatis repudiandae eum rerum repellendus ea minus blanditiis deleniti doloremque reprehenderit asperiores natus animi necessitatibus sed. Ab, provident tempore eum recusandae maiores quaerat. Ut excepturi perspiciatis dolor aliquid. Praesentium, temporibus aliquid ab explicabo magni vero hic!</p>
                <br />
                <p className='text-xl '>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam a voluptatem molestias aspernatur iure delectus veniam provident minus mollitia beatae animi assumenda cupiditate labore, velit accusantium ratione corporis sit incidunt. At, pariatur rerum. Porro in saepe magni similique veniam laudantium blanditiis voluptatum. Eligendi laboriosam consectetur illo dicta suscipit, aspernatur fugiat?
                </p>
            </div>
        </div>
    );
};

export default About;