import React from 'react';
import RecommendationItem from './RecommendationItem';

const Recommendations = () => {
    return (
        <div className="mt-5">
            <div className="flex items-center justify-between">
                <span className="text-mainGray">Recommendations for you</span>
                <span>All</span>
            </div>
            <ul className="flex flex-col">
                {[...Array(5)].map(i => <RecommendationItem />)}
            </ul>
        </div>
    );
};

export default Recommendations;