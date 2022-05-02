import React, { FC, useState } from 'react';
import { BookmarkIcon, ChatIcon, DotsHorizontalIcon, EmojiHappyIcon, HeartIcon, PaperAirplaneIcon } from '@heroicons/react/outline';
import { HeartIcon as HeartFilled } from "@heroicons/react/solid"
import { NavLink } from 'react-router-dom';
import { IPost } from '../types/DBmodels';
import { AllRoutes } from './AppRoutes';
import { useAppSelector } from '../hooks/useAppSelector';
import Comments from './Comments';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createComment, deletePost, likePost, unlikePost } from '../redux/thunks/posts';
import { validate } from '../utils/validate';
import Modal from './Modal';


interface IPostProps {
    item: IPost
}

interface IFormFields {
    text: string
}

const Post: FC<IPostProps> = ({ item }) => {
    const [open, setOpen] = useState(false)

    const onOpen = () => setOpen(true)
    const onClose = () => setOpen(false)

    const dispatch = useDispatch()
    const { isAuth, user } = useAppSelector(state => state.user)
    const { isAddingComm, isDeleting, isLiking } = useAppSelector(state => state.posts)

    const { register, handleSubmit, reset } = useForm<IFormFields>()

    const onSubmit: SubmitHandler<IFormFields> = ({ text }) => {
        dispatch(createComment({ text, postId: item._id }) as any)
        reset()
    }

    const handleDeletePost = () => {
        if (window.confirm("Do you want to delete post?")) {
            dispatch(deletePost(item._id) as any)
            onClose()
        }
    }


    const handleLike = () => {
        dispatch(likePost(item._id) as any)
    }

    const handleUnlike = () => {
        dispatch(unlikePost(item._id) as any)
    }

    return (
        <li className="flex flex-col shadow-sm shadow-gray-400 bg-white">
            <div className="p-4 flex items-center">
                <div className="flex items-center flex-auto">
                    <NavLink to={AllRoutes.profile + `/${item.user._id}`}>
                        <img src={item.user.img} alt="user"
                            className="h-8 w-8 object-contain rounded-[50%]" />
                    </NavLink>
                    <div className="ml-3">
                        <NavLink to={AllRoutes.profile + `/${item.user._id}`}
                            className="font-bold hover:underline">
                            {item.user.username}
                        </NavLink>
                        <p className="text-xs text-mainGray">{item.user.email}</p>
                    </div>
                </div>
                {user?._id === item.user._id && <DotsHorizontalIcon
                    className="h-6 w-6 cursor-pointer" onClick={onOpen} />}
            </div>


            <div className="w-full">
                <img src={item.img} alt="post img" className="object-contain" />
            </div>


            {isAuth && <div className="flex items-center p-4">
                <div className="flex items-center gap-4 flex-1">

                    <span className="flex items-center">
                        {item.likes.includes(user!._id)
                            ? <button onClick={handleUnlike} disabled={isLiking}>
                                <HeartFilled className="postBtn text-red-700" />
                            </button>
                            : <button onClick={handleLike} disabled={isLiking}>
                                <HeartIcon className="postBtn" />
                            </button>}

                        <span className="font-semibold ml-2">
                            {item.likes.length}
                        </span>
                    </span>
                    <span className="flex items-center">
                        <ChatIcon className="postBtn" />
                        <span className="ml-2 font-semibold">{item.comments.length}</span>
                    </span>
                    <PaperAirplaneIcon className="postBtn rotate-[45deg]" />

                </div>
                <BookmarkIcon className="postBtn" />
            </div>}


            <div className="px-4 truncate py-2">
                <NavLink to={AllRoutes.profile + `/${item.user._id}`}
                    className="font-bold mr-1 hover:underline hover:text-mainBlue transition-colors">
                    {item.user.username}
                </NavLink>
                <span className="">{item.title}</span>
            </div>


            <Comments comments={item.comments} />


            {isAuth && <div className="px-4 py-2 border-t border-gray-100">
                <form action="" className="flex items-center gap-4" onSubmit={handleSubmit(onSubmit)}>
                    <EmojiHappyIcon className="postBtn" />
                    <input type="text" className="flex-1" placeholder="New comment..."
                        {...register("text", validate(100, 1))} />
                    <button className="text-mainBlue font-semibold disabled:opacity-40"
                        disabled={isAddingComm}>
                        Comment
                    </button>
                </form>
            </div>}

            {open && <Modal title={"Post actions"} onClose={onClose}>
                <div className="flex flex-col">
                    <button className="actionBtn text-red-700 font-bold" disabled={isDeleting}
                        onClick={handleDeletePost}>
                        Delete Post
                    </button>
                    <button className="actionBtn">
                        Report Post
                    </button>
                </div>
            </Modal>}
        </li>
    );
};

export default Post;