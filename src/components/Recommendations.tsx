import React from 'react';
import { useAppSelector } from '../hooks/useAppSelector';
import RecommendationItem from './RecommendationItem';

const Recommendations = () => {

    const { recomendations, user } = useAppSelector(state => state.user)

    return (
        <div className="mt-5">
            <div className="flex items-center justify-between">
                <span className="text-mainGray">Recommendations for you</span>
                <span>All</span>
            </div>
            <ul className="flex flex-col">
                {recomendations.filter(r => r._id !== user?._id)
                    .map(r => <RecommendationItem item={r} key={r._id} />)}
            </ul>
        </div>
    );
};

export default Recommendations;