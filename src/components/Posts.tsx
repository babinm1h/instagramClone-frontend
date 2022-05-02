import React from 'react';
import { useAppSelector } from '../hooks/useAppSelector';
import Loader from './Loader/Loader';
import Post from './Post';

const Posts = () => {
    const { isLoading, posts, isAddingPost } = useAppSelector(state => state.posts)

    return (
        <div className="my-6">
            {isLoading || isAddingPost
                ? <div className="text-center"><Loader /></div>
                : <ul className="flex flex-col gap-6">
                    {posts.map(p => <Post item={p} key={p._id} />)}
                </ul>}
        </div>
    );
};

export default Posts;