import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Feed from '../components/Feed';
import Header from '../components/Header';
import { fetchPosts } from '../redux/thunks/posts';

const Home = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPosts() as any)
    }, [])

    return (
        <>
            <Header />
            <Feed />
        </>
    );
};

export default Home;