import React, { FC } from 'react';
import { IComment } from '../types/DBmodels';
import { getDate } from '../utils/getDate';

interface ICommentProps {
    comment: IComment
}

const Comment: FC<ICommentProps> = ({ comment }) => {
    return (
        <li className="mb-4">
            <div className="flex items-center gap-2">
                <img src={comment.user.img} alt="user"
                    className="w-5 h-5 object-contain rounded-[50%]" />
                <p className="font-bold truncate w-[100px] flex-shrink-0">{comment.user.username}</p>
                <p className="flex-auto break-words">{comment.text}</p>
            </div>
            <span className="text-xs text-mainGray">
                {getDate(comment.createdAt)}
            </span>
        </li>
    );
};

export default Comment;