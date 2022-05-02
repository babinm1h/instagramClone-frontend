import React from 'react';

const RecommendationItem = () => {
    return (
        <li className="flex items-center gap-4 mt-4">
            <div className="w-8 h-8">
                <img src="https://avatars.cloudflare.steamstatic.com/b05158dcd21d357e24bb0799980c6568c4c97df8_full.jpg" alt="user"
                    className="object-contain rounded-[50%]" />
            </div>

            <div className="flex-1">
                <p className="font-semibold">m1hailcsgod</p>
            </div>

            <button className="text-mainBlue text-xs disabled:opacity-40">
                Follow
            </button>
        </li>
    );
};

export default RecommendationItem;