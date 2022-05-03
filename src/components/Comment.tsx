import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { IComment } from '../types/DBmodels';
import { getDate } from '../utils/getDate';
import { AllRoutes } from './AppRoutes';

interface ICommentProps {
    comment: IComment
}

const Comment: FC<ICommentProps> = ({ comment }) => {
    return (
        <li className="mb-4">
            <div className="flex items-center gap-2">
                <img src={comment.user.img} alt="user"
                    className="w-5 h-5 object-cover rounded-[50%]" />
                <NavLink to={AllRoutes.profile + `/${comment.user._id}`} className="font-bold truncate max-w-[100px] flex-shrink-0">
                    {comment.user.username}
                </NavLink>
                <p className="flex-auto break-words">{comment.text}</p>
            </div>
            <span className="text-xs text-mainGray">
                {getDate(comment.createdAt)}
            </span>
        </li>
    );
};

export default Comment;