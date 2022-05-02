import React from 'react';

const Story = () => {
    return (
        <li className="cursor-pointer">
            <img src="https://avatars.cloudflare.steamstatic.com/eaac704a2c9fdd6389935bea366b5e68591896d3_full.jpg" alt="user"
                className="w-14 h-14 rounded-[50%] p-[1px] border-2 border-[#fd1d1d] cursor-pointer hover:scale-105 transition-all duration-150" />
            <p className="truncate text-center w-14">
                s1mple
            </p>
        </li>
    );
};

export default Story;