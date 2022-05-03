import React from 'react';

const Story = () => {
    return (
        <li className="cursor-pointer">
            <img src="https://avatars.akamai.steamstatic.com/3d38ad2818ee77c68ea8aa3ca28c037d80ebadd6_full.jpg" alt="user"
                className="w-14 h-14 rounded-[50%] p-[1px] border-2 border-[#fd1d1d] cursor-pointer hover:scale-105 transition-all duration-150" />
            <p className="truncate text-center w-14">
                username
            </p>
        </li>
    );
};

export default Story;