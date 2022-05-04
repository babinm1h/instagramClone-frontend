import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import Header from '../components/Header';
import Loader from '../components/Loader/Loader';
import { useAppSelector } from '../hooks/useAppSelector';
import { fetchProfile, follow, unfollow } from '../redux/thunks/userProfile';
import { HeartIcon, ChatIcon } from "@heroicons/react/solid"
import { AllRoutes } from '../components/AppRoutes';

const Profile = () => {
    const nav = useNavigate()

    const dispatch = useDispatch()
    const { id } = useParams() as { id: string }

    const { isFollowing, isLoading, user } = useAppSelector(state => state.userProfile)
    const { user: loggedUser, isAuth } = useAppSelector(state => state.user)


    useEffect(() => {
        if (id) dispatch(fetchProfile(id) as any)
    }, [id])


    const handleFollow = () => {
        dispatch(follow(id) as any)
    }

    const handleUnfollow = () => {
        dispatch(unfollow(id) as any)
    }

    const onEditClick = () => {
        nav(AllRoutes.edit + `/${loggedUser}`)
    }

    if (isLoading) {
        return <div className="text-center"><Loader /></div>
    }

    return (
        <>
            <Header />

            <main className="max-w-4xl mx-auto py-7 w-full">
                <section className="flex gap-10 border-b border-gray-300 pb-10 px-4">
                    <div className="flex-shrink-0">
                        <img src={user?.img} alt="user"
                            className="h-[150px] w-[150px] object-cover rounded-[50%] border border-mainGray p-[2px]" />
                    </div>

                    <div className="md:pl-[30px]">
                        {isAuth && <div className="items-start flex-col flex md:items-center md:flex-row gap-5">
                            <h2 className="text-2xl font-light truncate max-w-[200px]">
                                {user?.username}
                            </h2>
                            {user?._id === loggedUser?._id
                                ? <button className="profileBtn" onClick={onEditClick}>
                                    Edit profile
                                </button>
                                : <>
                                    {user?.followers.includes(loggedUser!._id)
                                        ? <button className="profileBtn" disabled={isFollowing}
                                            onClick={handleUnfollow}>
                                            Unfollow
                                        </button>
                                        : <button className="profileBtn" disabled={isFollowing}
                                            onClick={handleFollow}>
                                            Follow
                                        </button>}
                                </>}
                        </div>}


                        <div className="my-6 sm:flex items-center gap-7 sm:text-lg">
                            <p className="mb-1">{user?.posts.length} posts</p>
                            <p className="">{user?.followers.length} followers</p>
                        </div>

                        <div className="">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, amet dolore ea temporibus dicta consequatur sapiente expedita dolorum, soluta eligendi voluptatibus ducimus, vitae asperiores dignissimos?
                            </p>
                        </div>
                    </div>
                </section>


                <section className="mt-10">
                    <div className="grid-cols-1 place-items-center sm:grid-cols-3 grid md:grid-cols-3 gap-5">
                        {user!.posts.length > 0
                            ? user?.posts.map(i => <div className="profilePost" key={i._id}>
                                <img src={i.img} alt="post"
                                    className="w-full h-full block object-cover" />

                                <div className="postOverlay hidden absolute bg-black bg-opacity-50 top-0 left-0 w-full h-full items-center justify-center gap-5">
                                    <span className="flex items-center text-white">
                                        <ChatIcon className="h-8 w-8" />
                                        <span className="ml-2 font-semibold">{i.comments.length}</span>
                                    </span>
                                    <span className="flex items-center text-white">
                                        <HeartIcon className="h-8 w-8" />
                                        <span className="ml-2 font-semibold">{i.likes.length}</span>
                                    </span>
                                </div>
                            </div>
                            )
                            : <p className="font-bold text-lg mx-auto">
                                User dont have posts
                            </p>}
                    </div>
                </section>
            </main>
        </>
    );
};

export default Profile;