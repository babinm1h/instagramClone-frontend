import React from 'react';
import { useAppSelector } from '../hooks/useAppSelector';
import MiniProfile from './MiniProfile';
import Posts from './Posts';
import Recommendations from './Recommendations';
import Stories from './Stories';

const Feed = () => {
    const { isAuth } = useAppSelector(state => state.user)

    return (
        <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl mx-auto xl:grid-cols-3 xl:max-w-6xl my-6">
            <section className="col-span-2">
                <Stories />
                <Posts />
            </section>



            {isAuth && <section className="hidden xl:block">
                <div className="flex-col py-4 px-6 flex fixed">
                    <MiniProfile />
                    <Recommendations />
                </div>
            </section>}
        </main>
    );
};

export default Feed;