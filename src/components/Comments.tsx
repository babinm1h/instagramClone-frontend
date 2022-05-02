import React, { FC } from 'react';
import { IComment } from '../types/DBmodels';
import Comment from "./Comment"

interface ICommentsProps {
    comments: IComment[]
}

const Comments: FC<ICommentsProps> = ({ comments }) => {
    return (
        <div className="px-4 py-2 scrollbar-thin scrollbar-thumb-mainGray overflow-hidden overflow-y-scroll h-28">
            <ul className="flex flex-col w-full">
                {comments.map(c => <Comment comment={c} key={c._id} />)}
            </ul>
        </div>
    );
};

export default Comments;