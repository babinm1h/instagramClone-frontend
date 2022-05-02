import React from 'react';
import Story from './Story';

const Stories = () => {


    return (
        <div className="shadow-sm shadow-gray-400 bg-white rounded-sm">
            <ul className="flex items-center gap-5 overflow-hidden overflow-x-scroll p-4 scrollbar-thin  scrollbar-thumb-mainGray scroll-smooth">
                {[...Array(20)].map(i => <Story key={i} />)}
            </ul>
        </div>
    );
};

export default Stories;