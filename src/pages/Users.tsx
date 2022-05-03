import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import Header from '../components/Header';
import RecommendationItem from '../components/RecommendationItem';
import { useAppSelector } from '../hooks/useAppSelector';
import { searchUsers } from '../redux/thunks/user';


const Users = () => {
    const dispatch = useDispatch()
    const { search } = useParams() as { search: string }

    const { searchedUsers } = useAppSelector(state => state.user)

    useEffect(() => {
        if (search) dispatch(searchUsers(search) as any)
    }, [search, dispatch])

    return (
        <>
            <Header />
            <div className="p-4">
                <h1 className="font-bold my-2 text-2xl">Results for: "{search}"</h1>
                <ul className="flex flex-col">
                    {searchedUsers.length > 0
                        ? searchedUsers.map(u => <RecommendationItem item={u} key={u._id} />)
                        : <div className="font-bold text-xl text-center">Users not found</div>}
                </ul>
            </div>
        </>
    );
};

export default Users;